import { Injectable } from '@nestjs/common';
import { AwsService } from '../aws/aws.service';
import { langHtml, templateBody } from '../../utils/email.utils';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { UserEntity } from '../../domain/user/user.entity';
import { readFileSync } from 'fs';
import * as path from 'path';
import Handlebars from 'handlebars';
import * as process from 'process';
import { decrypt, encrypt } from '../../utils/encrypt.utils';
import { UserRepository } from '../../domain/user/user.repository';
import { ResResult } from '../../model/result.dto';
import { dateToTimestamp, timestampToDate } from '../../utils/date.utils';

const PATH_EMAIL_TEMPLATE = '../../templates/email';

@Injectable()
export class EmailService {
  constructor(
    private readonly awsService: AwsService,
    private readonly userRepository: UserRepository,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async test(lang: string): Promise<boolean> {
    return await this.awsService.sendEmail(
      lang,
      'chonglye@aartkorea.com',
      'test',
      'testbody',
    );
  }

  // "EMAIL_UNSUBSCRIBE_URL":"http://localhost:8080/unsubscribe",
  async headerImageHtml(lang: string): Promise<string> {
    const body = readFileSync(
      path.join(
        __dirname,
        PATH_EMAIL_TEMPLATE,
        'headerImage',
        `${langHtml(lang)}`,
      ),
      'utf8',
    );
    const template = Handlebars.compile(body);
    return template({
      headerImage:
        'https://aart-camping.s3.ap-northeast-2.amazonaws.com/email-header.png',
    });
  }

  async footerSimpleHtml(lang: string): Promise<string> {
    const body = readFileSync(
      path.join(
        __dirname,
        PATH_EMAIL_TEMPLATE,
        'footerSimple',
        `${langHtml(lang)}`,
      ),
      'utf8',
    );
    const template = Handlebars.compile(body);
    return template({
      companyName: await this.i18n.t('email.EMAIL_COMPANY_NAME', {
        lang,
      }),
      companyEmail: await this.i18n.t('email.EMAIL_COMPANY_EMAIL', {
        lang,
      }),
      companyTel: await this.i18n.t('email.EMAIL_COMPANY_TEL', {
        lang,
      }),
      companyAddress: await this.i18n.t('email.EMAIL_COMPANY_ADDRESS', {
        lang,
      }),
    });
  }

  // 회원의 수신 여부 확인 후 보내야함
  async footerSubscribeHtml(userId: number, lang: string): Promise<string> {
    const expireTime = new Date(); // 현재 시간
    expireTime.setDate(expireTime.getDate() + 7); // 7일 추가

    const encodedId = encrypt(userId + '|' + dateToTimestamp(expireTime));
    const body = readFileSync(
      path.join(__dirname, PATH_EMAIL_TEMPLATE, 'footer', `${langHtml(lang)}`),
      'utf8',
    );
    const template = Handlebars.compile(body);
    return template({
      sendTime: new Date().toLocaleString(lang),
      unsubscribeUrl: `${process.env.EMAIL_UNSUBSCRIBE_URL}?key=${encodedId}`,
      companyName: await this.i18n.t('email.EMAIL_COMPANY_NAME', {
        lang,
      }),
      companyEmail: await this.i18n.t('email.EMAIL_COMPANY_EMAIL', {
        lang,
      }),
      companyTel: await this.i18n.t('email.EMAIL_COMPANY_TEL', {
        lang,
      }),
      companyAddress: await this.i18n.t('email.EMAIL_COMPANY_ADDRESS', {
        lang,
      }),
    });
  }

  async sendSignupCompletion(user: UserEntity, lang: string): Promise<boolean> {
    const expireTime = new Date(); // 현재 시간
    expireTime.setMinutes(expireTime.getMinutes() + 30); // 30분 추가

    const encodedId = encrypt(user.id + '|' + dateToTimestamp(expireTime));
    const contentBody = templateBody(
      'signup',
      lang,
    )({
      serviceName: await this.i18n.t('default.SERVICE_NAME', { lang }),
      joinTime: user.createdTime.toLocaleString(lang),
      email: user.email,
      emailAuthLink: `${
        process.env.HOST_SERVICE
      }/api/verification-email?key=${encodeURIComponent(encodedId)}`,
      footerHtml: await this.footerSimpleHtml(lang), // 안내용 메일
      headerImageHtml: await this.headerImageHtml(lang),
    });
    return await this.awsService.sendEmail(
      lang,
      user.email,
      `[${await this.i18n.t('default.SERVICE_NAME')}] ${await this.i18n.t(
        'email.EMAIL_VERIFICATION',
        { lang },
      )}`,
      contentBody,
    );
  }

  async sendEmailVerification(
    email: string,
    verificationCode: string,
    lang: string,
  ): Promise<boolean> {
    const contentBody = templateBody(
      'verificationEmail',
      lang,
    )({
      serviceName: await this.i18n.t('default.SERVICE_NAME', { lang }),
      verificationCode,
      email: email,
      footerHtml: await this.footerSimpleHtml(lang), // 안내용 메일
      headerImageHtml: await this.headerImageHtml(lang),
    });
    return await this.awsService.sendEmail(
      lang,
      email,
      `[${await this.i18n.t('default.SERVICE_NAME')}] ${await this.i18n.t(
        'email.EMAIL_VERIFICATION',
        { lang },
      )}`,
      contentBody,
    );
  }

  async unsubscribe(key: string): Promise<ResResult> {
    try {
      const splitted = decrypt(key).split('|');
      const expireTime = timestampToDate(Number(splitted[1]));
      const isExpire = expireTime < new Date();
      if (isExpire) {
        throw new Error('EXPIRE KEY');
      }
      const id = Number(splitted[0]);
      const user = await this.userRepository.get(id);
      const aEmail = user.termsAgree.emailRcv;
      if (aEmail) {
        const result = await this.userRepository.update(user.id, {
          termsAgree: {
            emailRcv: false,
            emailRcvTime: null,
          },
        });
        console.log(result);
      }
      return new ResResult(true);
    } catch (e) {
      console.log(e);
      const result = new ResResult();
      result.result = false;
      result.message = e instanceof Error ? e.message : 'UNKNOWN_ERROR';
      return result;
    }
  }
}
