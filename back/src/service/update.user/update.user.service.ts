import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IdvSuccess, Profile, SuccessJoin } from '../../model/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../domain/user/user.repository';
import { AuthorityService } from '../authority/authority.service';
import { EmailService } from '../email/email.service';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { generateRandomNumber, isEmpty } from '../../utils/string.utils';
import { ResResult } from '../../model/result.dto';
import { hashPassword, jwtPayload } from '../../utils/auth.utils';
import { UserService } from '../user/user.service';
import {
  splitKoreanName,
  validateNickname,
  validatePassword,
} from '../../utils/regex.utils';
import { CreatePassword, MarketingUpdatedBody } from '../../model/account.dto';
import { SocialIdEmbed } from '../../domain/user/socialId.embed.';
import { Not } from 'typeorm';

@Injectable()
export class UpdateUserService {
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly userService: UserService,
    private readonly authorityService: AuthorityService,
    private readonly emailService: EmailService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async chkEmptyUser(userId: number, lang: string): Promise<void> {
    if (!(await this.userRepository.exist({ where: { id: userId } }))) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.EMPTY_USER', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async resetEmailVerification(userId: number, lang: string): Promise<void> {
    await this.chkEmptyUser(userId, lang);
    try {
      await this.userRepository.update(userId, {
        verification: {
          newEmail: null,
          emailCode: null,
          expireEmailCode: null,
        },
      });
    } catch (e) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.VERIFICATION_EMAIL_FAILED', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async sendEmailVerification(
    email: string, // 변경할 이메일
    userId: number,
    lang: string,
  ): Promise<ResResult> {
    await this.chkEmptyUser(userId, lang);
    const expireTime = new Date(); // 현재 시간
    expireTime.setMinutes(expireTime.getMinutes() + 30); // 30분 추가
    const verificationCode = generateRandomNumber();
    // 중복 체크
    if (await this.userRepository.existByEmail(email)) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.EXIST_EMAIL', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.userRepository.get(userId);
    if (user) {
      if (
        user.verification &&
        user.verification.email &&
        user.verification.expireEmailCode &&
        user.verification.expireEmailCode < new Date()
      ) {
        throw new HttpException(
          this.i18n.translate('account.USER_UPDATE.ALREADY_EMAIL', { lang }),
          HttpStatus.BAD_REQUEST,
        );
      }
      // 코드 수정
      try {
        await this.userRepository.update(user.id, {
          verification: {
            newEmail: email,
            emailCode: verificationCode,
            expireEmailCode: expireTime,
          },
        });
      } catch (e) {
        await this.resetEmailVerification(userId, lang);
        throw new HttpException(
          this.i18n.translate('account.USER_UPDATE.CREATE_EMAIL_FAILED', {
            lang,
          }),
          HttpStatus.BAD_REQUEST,
        );
      }
      // 코드 발송
      try {
        await this.emailService.sendEmailVerification(
          email,
          verificationCode,
          lang,
        );
      } catch (e) {
        await this.resetEmailVerification(userId, lang);
        throw new HttpException(
          this.i18n.translate('account.USER_UPDATE.SEND_EMAIL_FAILED', {
            lang,
          }),
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    return new ResResult(true);
  }

  async confirmEmailVerification(
    code: string,
    userId: number,
    lang: string,
  ): Promise<SuccessJoin> {
    await this.chkEmptyUser(userId, lang);
    const user = await this.userRepository.get(userId);
    if (user.verification.emailCode === code) {
      try {
        await this.userRepository.update(user.id, {
          email: user.verification.newEmail,
          verification: {
            email: true,
            newEmail: null,
            emailCode: null,
            expireEmailCode: null,
          },
        });
        const updated = await this.userRepository.get(user.id);
        return {
          user: new Profile(updated),
          access_token: this.jwtService.sign(await jwtPayload(updated)),
        };
      } catch (e) {
        console.error(e);
        // await this.resetEmailVerification(userId, lang);
        throw new HttpException(
          this.i18n.translate('account.USER_UPDATE.VERIFICATION_EMAIL_FAILED', {
            lang,
          }),
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.NOT_MATCH_CODE', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async resetMobileVerification(userId: number, lang: string): Promise<void> {
    try {
      await this.userRepository.update(userId, {
        verification: {
          newMobile: null,
          mobile: null,
          expireMobilCode: null,
        },
      });
    } catch (e) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.VERIFICATION_MOBILE_FAILED', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async duplicateNickname(
    userId: number,
    nickname: string,
    lang: string,
  ): Promise<ResResult> {
    await this.chkEmptyUser(userId, lang);
    try {
      if (!nickname || nickname === '') {
        throw new HttpException(
          this.i18n.translate('account.USER_UPDATE.NICKNAME.EMPTY'),
          HttpStatus.BAD_REQUEST,
        );
      }
      const result = new ResResult();
      result.result = await this.userRepository.exist({
        where: {
          nickname: nickname,
          id: Not(userId),
        },
      });
      return result;
    } catch (e) {
      console.error(e, 'error');
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.UNKNOWN_ERROR', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async changeNickname(
    userId: number,
    nickname: string,
    lang: string,
  ): Promise<SuccessJoin> {
    await this.chkEmptyUser(userId, lang);
    if (!nickname || nickname === '') {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.NICKNAME.EMPTY', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!validateNickname(nickname)) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.NICKNAME.VALID', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!(await this.duplicateNickname(userId, nickname, lang)).result) {
      try {
        await this.userRepository.update(userId, {
          nickname: nickname,
        });
        const updated = await this.userRepository.get(userId);
        return {
          user: new Profile(updated),
          access_token: this.jwtService.sign(await jwtPayload(updated)),
        };
      } catch (e) {
        console.error(e, 'error');
        throw new HttpException(
          this.i18n.translate('account.USER_UPDATE.UNKNOWN_ERROR', {
            lang,
          }),
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      console.error('EXIST');
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.NICKNAME.EXIST', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async changePassword(
    userId: number,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    lang: string,
  ): Promise<ResResult> {
    await this.chkEmptyUser(userId, lang);

    const user = await this.userRepository.get(userId);
    if (!(await this.userService.checkPassword(user, oldPassword))) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.PASSWORD.NOT_MATCH_OLD', {
          lang,
        }),
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!validatePassword(newPassword)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_PASSWORD', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }

    if (newPassword === oldPassword) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.PASSWORD.OLD_SAME', {
          lang,
        }),
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (
      isEmpty(newPassword) ||
      isEmpty(confirmPassword) ||
      newPassword !== confirmPassword
    ) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.PASSWORD.NOT_MATCH_CONFIRM', {
          lang,
        }),
        HttpStatus.UNAUTHORIZED,
      );
    }
    await this.userRepository.update(userId, {
      password: await hashPassword(newPassword),
    });
    return new ResResult(true);
  }

  async changeMarketing(
    userId: number,
    value: boolean,
    lang: string,
  ): Promise<ResResult> {
    await this.chkEmptyUser(userId, lang);

    await this.userRepository.update(userId, {
      termsAgree: {
        taMarketing: value,
      },
    });
    return new ResResult(true);
  }

  async changeSmsRcv(
    userId: number,
    value: boolean,
    lang: string,
  ): Promise<MarketingUpdatedBody> {
    await this.chkEmptyUser(userId, lang);

    const result = new MarketingUpdatedBody();
    result.value = value;
    result.date = value ? new Date() : null;

    await this.userRepository.update(userId, {
      termsAgree: {
        smsRcv: result.value,
        smsRcvTime: result.date,
      },
    });

    return result;
  }

  async changeEmailRcv(
    userId: number,
    value: boolean,
    lang: string,
  ): Promise<MarketingUpdatedBody> {
    await this.chkEmptyUser(userId, lang);

    const result = new MarketingUpdatedBody();
    result.value = value;
    result.date = value ? new Date() : null;

    await this.userRepository.update(userId, {
      termsAgree: {
        emailRcv: result.value,
        emailRcvTime: result.date,
      },
    });
    return result;
  }

  async changeKakaoRcv(
    userId: number,
    value: boolean,
    lang: string,
  ): Promise<MarketingUpdatedBody> {
    await this.chkEmptyUser(userId, lang);

    const result = new MarketingUpdatedBody();
    result.value = value;
    result.date = value ? new Date() : null;

    await this.userRepository.update(userId, {
      termsAgree: {
        kakaoRcv: result.value,
        kakaoRcvTime: result.date,
      },
    });
    return result;
  }

  async changePushRcv(
    userId: number,
    value: boolean,
    lang: string,
  ): Promise<MarketingUpdatedBody> {
    await this.chkEmptyUser(userId, lang);

    const result = new MarketingUpdatedBody();
    result.value = value;
    result.date = value ? new Date() : null;

    await this.userRepository.update(userId, {
      termsAgree: {
        pushRcv: result.value,
        pushRcvTime: result.date,
      },
    });
    return result;
  }

  async googleUpdateConnect(
    googleId: string,
    googleName: string,
    userId: number,
    lang: string,
  ): Promise<SocialIdEmbed> {
    await this.chkEmptyUser(userId, lang);

    await this.userRepository.update(userId, {
      socialId: {
        googleId,
        googleName,
      },
    });

    return (await this.userRepository.get(userId)).socialId;
  }

  async kakaoUpdateConnect(
    kakaoId: string,
    kakaoName: string,
    userId: number,
    lang: string,
  ): Promise<SocialIdEmbed> {
    await this.chkEmptyUser(userId, lang);

    await this.userRepository.update(userId, {
      socialId: {
        kakaoId,
        kakaoName,
      },
    });

    return (await this.userRepository.get(userId)).socialId;
  }

  async naverUpdateConnect(
    naverId: string,
    naverName: string,
    userId: number,
    lang: string,
  ): Promise<SocialIdEmbed> {
    await this.chkEmptyUser(userId, lang);

    await this.userRepository.update(userId, {
      socialId: {
        naverId,
        naverName,
      },
    });

    return (await this.userRepository.get(userId)).socialId;
  }

  async updateIdvUser(
    body: IdvSuccess,
    userId: number,
    lang: string,
  ): Promise<ResResult> {
    try {
      const user = await this.userRepository.get(userId);
      if (
        (user.birth && user.birth !== body.dob) ||
        (user.gender && user.gender !== body.toGender())
      ) {
        // 사용자의 생년월일 데이터가 있고, 본인인증한 생년월일이 일치 하지 않는 경우
        // 사용자의 성별 데이터가 있고, 본인인증한 성별이 일치 하지 않는 경우
        throw new HttpException(
          this.i18n.translate('account.USER_UPDATE.IDV.NOT_ME', {
            lang,
          }),
          HttpStatus.BAD_REQUEST,
        );
      }
      const splitName = splitKoreanName(body.name);
      await this.userRepository.update(userId, {
        firstName: splitName.firstName,
        lastName: splitName.lastName,
        fullName: body.name,
        mobile: body.mobile,
        gender: body.toGender(),
        birth: body.dob,
      });
      return new ResResult(true);
    } catch (e) {
      console.error(e);
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.IDV.FAILED', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // 네이버일때 만 해당
  async createPassword(
    body: CreatePassword,
    userId: number,
    lang: string,
  ): Promise<ResResult> {
    const user = await this.userRepository.get(userId);
    if (!isEmpty(user.password)) {
      throw new HttpException(
        this.i18n.translate('account.USER_UPDATE.PASSWORD.NOT_EMPTY', {
          lang,
        }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!body || !validatePassword(body.password)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_PASSWORD', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.userRepository.update(userId, {
      password: await hashPassword(body.password),
    });
    return new ResResult(true);
  }
}
