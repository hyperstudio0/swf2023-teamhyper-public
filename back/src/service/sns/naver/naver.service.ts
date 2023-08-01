import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../../generated/i18n.generated';
import {
  AccessTokenResponse,
  Naver,
  SNSConnect,
  SNSResBody,
  SNSStatus,
  SNSType,
} from '../../../model/sns.dto';
import * as process from 'process';
import axios from 'axios';
import { SocialIdEmbed } from '../../../domain/user/socialId.embed.';
import { UserEntity } from '../../../domain/user/user.entity';
import { KeyMessage } from '../../../model/default.dto';
import { Profile } from '../../../model/login.dto';
import { isEmpty } from '../../../utils/string.utils';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class NaverService {
  constructor(
    private readonly userRepository: UserRepository,
    private authService: AuthService,
    private jwtService: JwtService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async getAccessToken(
    code: string,
    redirectUri: string,
    state: string,
    lang: string,
  ): Promise<AccessTokenResponse> {
    const accessTokenUri = new URL(process.env.NAVER_ACCESS_TOKEN_URI);
    console.debug('uri :::', accessTokenUri.toString());

    const formData = new URLSearchParams();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', process.env.NAVER_CLIENT_ID);
    formData.append('client_secret', process.env.NAVER_SECRET_KEY);
    formData.append('code', code);
    formData.append('redirect_uri', redirectUri);
    formData.append('state', state);

    try {
      console.log(formData, 'formData');
      const response = await axios.post(accessTokenUri.toString(), formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('> response:', response);
        throw new HttpException(response.data, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.i18n.translate('error.SNS_GOOGLE_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getMe(accessToken: string, lang: string): Promise<Naver> {
    const meUri = new URL(process.env.NAVER_ME_URI);
    meUri.searchParams.append('access_token', accessToken);
    console.debug('uri :::', meUri.toString());

    try {
      const response = await axios.get<Naver>(meUri.toString());

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('> response:', response.data);
        throw new HttpException(response.data, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.i18n.translate('error.SNS_NAVER_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getStatus(naver: Naver): Promise<KeyMessage> {
    const naverAccount = naver.response;
    const userOpt = await this.userRepository.getByNaverId(naverAccount.id);
    if (userOpt) {
      return SNSStatus.LINKED; // 이미 연동되어있음
    } else if (naverAccount.email !== undefined && naverAccount.email !== '') {
      const user = await this.userRepository.getByEmail(naverAccount.email);

      if (user) {
        if (user.leaveMeta.leave) {
          return SNSStatus.LEAVED_ACCOUNT; // 탈퇴한 계정
        }

        if (!user.socialId?.naverId) {
          // const socialId: SocialIdEmbed = user.socialId ?? new SocialIdEmbed();
          // socialId.naverId = naverAccount.id;
          // socialId.naverName = naverAccount.name;
          // user.socialId = socialId;
          //
          // if (
          //   naverAccount.profile_image !== undefined &&
          //   naverAccount.profile_image !== ''
          // ) {
          //   user.image = naverAccount.profile_image;
          // }
          //
          // await this.userRepository.save(user);
          return SNSStatus.CONNECT; // 연동 후 로그인
        } else {
          return SNSStatus.NOT_MATCH_SNS; // 다른 구글 ID로 이미 연동되어 있음
        }
      } else {
        return SNSStatus.NOT_EXISTED_ACCOUNT; // 존재하지 않는 계정
      }
    } else {
      return SNSStatus.NOT_PROVIDED_EMAIL; // 제공되지 않은 이메일
    }
  }

  async naverAuth(naver: Naver, lang: string): Promise<SNSResBody> {
    try {
      const naverAccount = naver.response;
      const status: KeyMessage = await this.getStatus(naver);
      const body: SNSResBody = new SNSResBody();

      console.debug('naver :::', naver);
      console.debug('status :::', status);
      body.status = status;
      body.snsType = SNSType.NAVER;
      body.id = naverAccount.id;
      body.name = naverAccount.name;
      body.email = naverAccount.email;

      switch (status) {
        case SNSStatus.LINKED: {
          const user: UserEntity = await this.userRepository.getByNaverId(
            naverAccount.id,
          );
          if (user.leaveMeta.leave) {
            throw new HttpException(
              this.i18n.translate('error.JOIN_UNAUTHORIZED', { lang }),
              HttpStatus.UNAUTHORIZED,
            );
          }
          const authorities = user.authorities
            ? user.authorities.map((authority) => {
                return authority.role;
              })
            : [];
          body.access_token = this.jwtService.sign({
            email: user.email,
            role: authorities,
            sub: user.id,
          });
          return body;
        }

        case SNSStatus.CONNECT: {
          body.result = false;
          return body;
        }

        case SNSStatus.LEAVED_ACCOUNT: {
          body.result = false;
          return body;
        }

        case SNSStatus.NOT_MATCH_SNS: {
          body.result = false;
          return body;
        }

        case SNSStatus.NOT_EXISTED_ACCOUNT: {
          body.result = false;
          return body;
        }

        case SNSStatus.NOT_PROVIDED_EMAIL: {
          body.result = false;
          return body;
        }

        default:
          throw new HttpException(
            this.i18n.translate('error.SNS_NAVER_ERROR', { lang }),
            HttpStatus.BAD_REQUEST,
          );
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.i18n.translate('error.SNS_NAVER_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async connectNaver(
    code: string,
    redirectUri: string,
    state: string,
    lang: string,
  ): Promise<Naver> {
    console.log('===naver');
    console.log('code ::: ', code);
    console.log('redirectUri ::: ', redirectUri);

    const accessTokenResult: any = await this.getAccessToken(
      code,
      redirectUri,
      state,
      lang,
    );
    const accessToken: string = accessTokenResult.access_token;
    const refreshToken: string = accessTokenResult.refresh_token;
    const tokenType: string = accessTokenResult.token_type;
    const expiresIn: string = accessTokenResult.expires_in;

    console.log('===naver accessTokenResult');
    console.log('accessToken ::: ', accessToken);
    console.log('refreshToken ::: ', refreshToken);
    console.log('tokenType ::: ', tokenType);
    console.log('expiresIn ::: ', expiresIn);

    const meResult: Naver = await this.getMe(accessToken, lang);
    const naverAccount = meResult.response;
    console.log('>> meResult: ', meResult);

    const id: string = naverAccount.id;
    const name: string | null = naverAccount.name || null;
    const email: string | null = naverAccount.email || null;
    const picture: string | null = naverAccount.profile_image || null;

    console.log('===naver meResult');
    console.log('id ::: ', id);
    console.log('name ::: ', name);
    console.log('email ::: ', email);
    console.log('pictureMap ::: ', picture);

    return meResult;
  }

  async connectKey(
    { key, nickname, email, password }: SNSConnect,
    lang,
  ): Promise<Profile> {
    if (isEmpty(key)) {
      throw new HttpException(
        this.i18n.translate('error.SNS_CONNECT_EMPTY_KEY', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (isEmpty(email)) {
      throw new HttpException(
        this.i18n.translate('error.SNS_CONNECT_EMPTY_EMAIL', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
    if (isEmpty(password)) {
      throw new HttpException(
        this.i18n.translate('error.SNS_CONNECT_EMPTY_PASSWORD', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.authService.validateUser(email, password, lang);
    user.socialId.naverId = key;
    user.socialId.naverName = nickname;
    const result = await this.userRepository.update(user.id, {
      socialId: {
        naverId: key,
        naverName: nickname,
      },
    });
    console.log(result, 'result');
    return new Profile(user);
  }
}
