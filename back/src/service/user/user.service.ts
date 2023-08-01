import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/user/user.entity';
import { UserRepository } from '../../domain/user/user.repository';
import { AuthorityType } from '../../domain/authority/authority.entity';
import { AuthorityService } from '../authority/authority.service';
import {
  AuthedUser,
  Profile,
  ReqLeave,
  SuccessJoin,
} from '../../model/login.dto';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import {
  splitKoreanName,
  validateEmail,
  validateMobileNumber,
  validateNickname,
  validatePassword,
} from '../../utils/regex.utils';
import {
  checkPassword,
  hashPassword,
  jwtPayload,
} from '../../utils/auth.utils';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';
import { ResResult } from '../../model/result.dto';
import { timestampToDate } from '../../utils/date.utils';
import { isEmpty } from '../../utils/string.utils';
import { decrypt } from '../../utils/encrypt.utils';
import { Not } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly authorityService: AuthorityService,
    private readonly emailService: EmailService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async join(user: UserEntity, lang: string): Promise<SuccessJoin> {
    if (!user) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    // === 휴대폰번호
    if (!user.mobile) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_EMPTY_MOBILE', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!validateMobileNumber(user.mobile)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_MOBILE', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (await this.userRepository.existByMobile(user.mobile)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_ALREADY_MOBILE', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    // === 이메일
    if (!user.email) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_EMPTY_EMAIL', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!validateEmail(user.email)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_EMAIL', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (await this.userRepository.existByEmail(user.email)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_ALREADY_EMAIL', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    // === 닉네임(별명)
    if (isEmpty(user.nickname)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_EMPTY_NICKNAME', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!validateNickname(user.nickname)) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_NICKNAME', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (
      await this.userRepository.exist({
        where: {
          nickname: user.nickname,
        },
      })
    ) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_DUPLICATE_NICKNAME', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    // === 비밀번호
    if (
      user &&
      !user.socialId &&
      !user.socialId.naverId &&
      !validatePassword(user.password)
    ) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_PASSWORD', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    // === 약관
    if (!user.termsAgree || !user.termsAgree.taService) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_SERVICE', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!user.termsAgree.taPrivacy) {
      throw new HttpException(
        this.i18n.translate('error.JOIN_BAD_PRIVACY', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    // if (!validateBirthdate(user.birth)) {
    //   throw new HttpException(
    //     this.i18n.translate('error.JOIN_BAD_BIRTH', { lang }),
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    if (
      user &&
      user.countryCode === 'KR' &&
      user.fullName &&
      (!user.firstName || !user.lastName)
    ) {
      const splitName = splitKoreanName(user.fullName);
      console.log(splitName, 'splitName');
      user.firstName = splitName.firstName;
      user.lastName = splitName.lastName;
    }
    if (!user?.socialId?.naverId) {
      user.password = await hashPassword(user.password);
    }

    const authority = await this.authorityService.getRole(AuthorityType.USER);
    user.authorities = [authority];

    const created = await this.userRepository.save(user);
    const profile = new Profile(created);
    try {
      await this.emailService.sendSignupCompletion(created, lang);
    } catch (e) {
      console.error(e, '회원가입 완료 이메일 발신 실퍠!');
    }
    return {
      user: profile,
      access_token: this.jwtService.sign(await jwtPayload(created)),
    };
  }

  async getProfile(id: number): Promise<Profile | null> {
    const user = await this.userRepository.get(id);
    return new Profile(user);
  }

  async findById(id: number): Promise<UserEntity | null> {
    return this.userRepository.get(id);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.getByEmail(email);
  }

  async checkPassword(user: UserEntity, password: string): Promise<boolean> {
    return checkPassword(password, user.password);
  }

  /**
   * 최초 등록 (관리자 유저)
   */
  async initCreateAdmin(): Promise<boolean> {
    this.createUser(
      'super@super.com',
      'super12345!',
      '01011111111',
      '종례',
      '장',
      '슈퍼관리자1',
      [AuthorityType.SUPER, AuthorityType.ADMIN, AuthorityType.USER],
    );
    this.createUser(
      'admin@admin.com',
      'admin12345!',
      '01011111112',
      '재상',
      '김',
      '일반관리자1',
      [AuthorityType.ADMIN, AuthorityType.USER],
    );
    this.createUser(
      'user@test.com',
      'test12345!',
      '01011111113',
      '지원',
      '김',
      '일반사용자1',
      [AuthorityType.USER],
    );
    return true;
  }

  /**
   * 최초 등록 (관리자 유저)
   * @param email
   * @param password
   * @param mobile
   * @param lastName
   * @param firstName
   * @param nickName
   * @param roles
   */
  async createUser(
    email: string,
    password: string,
    mobile: string,
    firstName: string,
    lastName: string,
    nickName: string,
    roles: AuthorityType[],
  ): Promise<UserEntity> {
    let user = await this.userRepository.getByEmail(email);
    if (!user) {
      user = new UserEntity();
      if (roles) {
        const authorities = await Promise.all(
          roles.map(async (role) => {
            try {
              return await this.authorityService.getRole(role);
            } catch (e) {
              return null;
            }
          }),
        ).then((filteredAuthorities) =>
          filteredAuthorities.filter((authority) => authority),
        );
        if (!authorities || authorities.length == 0) {
          return;
        }
        user.authorities = authorities;
      }
      user.email = email;
      user.password = password;
      user.firstName = firstName;
      user.lastName = lastName;
      user.fullName = lastName + firstName;
      user.mobile = mobile;
      user.nickname = nickName;
      user.birth = '19870123';
      user.password = await hashPassword(user.password);
      return await this.userRepository.save(user);
    }

    return user;
  }

  async duplicateNickname(nickname: string, lang: string): Promise<ResResult> {
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

  async sendVerificationEmail(
    authedUser: AuthedUser,
    lang: string,
  ): Promise<boolean> {
    try {
      const user = await this.userRepository.get(authedUser.userId);
      if (user) {
        try {
          await this.emailService.sendSignupCompletion(user, lang);
        } catch (e) {
          console.error(e, '회원가입 완료 이메일 발신 실퍠!');
        }
      }
      return true;
    } catch (e) {
      console.error(e);
    }

    return false;
  }

  async confirmVerificationEmail(key: string): Promise<ResResult> {
    try {
      const splitted = decrypt(decodeURIComponent(key)).split('|');
      const expireTime = timestampToDate(Number(splitted[1]));
      const isExpire = expireTime < new Date();
      if (isExpire) {
        throw new Error('EXPIRE_KEY');
      }
      const id = Number(splitted[0]);
      const user = await this.userRepository.get(id);
      const vEmail = user.verification && user.verification.email;
      if (!vEmail) {
        await this.userRepository.update(user.id, {
          verification: {
            email: true,
            emailCode: null,
            expireEmailCode: null,
          },
        });
        const result = new ResResult();
        result.result = true;
        return result;
      } else {
        const result = new ResResult();
        result.result = false;
        result.message = 'ALREADY_CONFIRM';
        return result;
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

  async leave(
    body: ReqLeave,
    userId: number,
    lang: string,
  ): Promise<ResResult> {
    const user = await this.userRepository.get(userId);
    if (await this.checkPassword(user, body.password)) {
      const isLeave = user.leaveMeta.leave;
      if (isLeave) {
        throw new HttpException(
          this.i18n.translate('error.LEAVE.ALREADY', { lang }),
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.userRepository.update(user.id, {
        leaveMeta: {
          leave: true,
          leaveReason: body.message,
          leaveDetailReason: body.detailMessage,
        },
      });
      return new ResResult(true);
    } else {
      throw new HttpException(
        this.i18n.translate('error.CHECK_PASSWORD', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
