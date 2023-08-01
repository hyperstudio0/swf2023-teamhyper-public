import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as process from 'process';
import { EmailFile } from '../../model/email.dto';
import {
  fileEmailBody,
  htmlEmailBody,
  textEmailBody,
} from '../../utils/email.utils';
import { promisify } from 'util';
import { isEmpty } from '../../utils/string.utils';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';

@Injectable()
export class AwsService {
  constructor(private readonly i18n: I18nService<I18nTranslations>) {}

  async credentials(): Promise<AWS.Credentials> {
    return new AWS.Credentials({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
  }

  async ses(): Promise<AWS.SES> {
    return new AWS.SES({ credentials: await this.credentials() });
  }

  async sendEmail(
    lang: string,
    to: string,
    subject: string,
    contentBody: string,
    file?: EmailFile,
  ): Promise<boolean> {
    const form = process.env.AWS_SES_FROM;
    if (isEmpty(to)) {
      throw new HttpException(
        this.i18n.translate('error.AWS_SES_EMPTY_TO', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (isEmpty(subject)) {
      throw new HttpException(
        this.i18n.translate('error.AWS_SES_EMPTY_SUBJECT', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (isEmpty(contentBody)) {
      throw new HttpException(
        this.i18n.translate('error.AWS_SES_EMPTY_BODY', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    let body = '';
    if (file) {
      body = fileEmailBody(form, to, subject, contentBody, file);
    } else {
      body = htmlEmailBody(form, to, subject, contentBody);
    }
    const params: AWS.SES.SendRawEmailRequest = {
      Destinations: [to],
      RawMessage: {
        // Note: You should create a raw email message according to RFC 5322
        Data: body,
      },
      Source: form,
    };
    // 이메일 보내기 요청
    const ses = await this.ses();
    const sendRawEmail = promisify(ses.sendRawEmail).bind(ses);
    try {
      const data = await sendRawEmail(params);
      console.log(data, '이메일 전송 성공');
      return true;
    } catch (err) {
      console.log(err, '이메일 전송 실패');
    }
    return false;
  }
}
