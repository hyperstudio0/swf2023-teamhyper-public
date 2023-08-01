import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  AccessTokenResponse,
  GooglePojo,
  SNSConnect,
  SNSResBody,
  SNSStatus,
  SNSType,
} from '../../../model/sns.dto';
import axios from 'axios';
import { UserRepository } from '../../../domain/user/user.repository';
import { UserEntity } from '../../../domain/user/user.entity';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../../generated/i18n.generated';
import { JwtService } from '@nestjs/jwt';
import { KeyMessage } from '../../../model/default.dto';
import { Profile } from '../../../model/login.dto';
import { isEmpty } from '../../../utils/string.utils';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class GoogleService {
  constructor(
    private readonly userRepository: UserRepository,
    private authService: AuthService,
    private jwtService: JwtService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async getAccessToken(
    code: string,
    redirectUri: string,
    lang: string,
  ): Promise<AccessTokenResponse> {
    const accessTokenUri = new URL(process.env.GOOGLE_ACCESS_TOKEN_URI);
    console.debug('uri :::', accessTokenUri.toString());

    const formData = new URLSearchParams();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', process.env.GOOGLE_CLIENT_ID);
    formData.append('client_secret', process.env.GOOGLE_SECRET_KEY);
    formData.append('code', code);
    formData.append('redirect_uri', redirectUri);

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

  async getMe(accessToken: string, lang: string): Promise<GooglePojo> {
    const meUri = new URL(process.env.GOOGLE_ME_URI);
    meUri.searchParams.append('access_token', accessToken);
    console.debug('uri :::', meUri.toString());

    try {
      const response = await axios.get<GooglePojo>(meUri.toString());

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('> response:', response.data);
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

  async getStatus(google: GooglePojo): Promise<KeyMessage> {
    const userOpt = await this.userRepository.getByGoogleId(google.id);
    if (userOpt) {
      return SNSStatus.LINKED; // 이미 연동되어있음
    } else if (google.email !== undefined && google.email !== '') {
      const user = await this.userRepository.getByEmail(google.email);

      if (user) {
        if (user.leaveMeta.leave) {
          return SNSStatus.LEAVED_ACCOUNT; // 탈퇴한 계정
        }

        if (!user.socialId?.googleId) {
          // const socialId: SocialIdEmbed = user.socialId ?? new SocialIdEmbed();
          // socialId.googleId = google.id;
          // socialId.googleName = google.name;
          // user.socialId = socialId;
          //
          // if (google.picture !== undefined && google.picture !== '') {
          //   user.image = goofredirect_uri_mismatchgle.picture;
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

  async googleAuth(google: GooglePojo, lang: string): Promise<SNSResBody> {
    try {
      const status: KeyMessage = await this.getStatus(google);
      const body: SNSResBody = new SNSResBody();

      body.status = status;
      body.snsType = SNSType.GOOGLE;
      body.id = google.id;
      body.name = google.name;
      body.email = google.email;
      body.google_access_token = google.accessToken;

      switch (status) {
        case SNSStatus.LINKED: {
          const user: UserEntity = await this.userRepository.getByGoogleId(
            google.id,
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
          body.google_access_token = google.accessToken;
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
            this.i18n.translate('error.SNS_GOOGLE_ERROR', { lang }),
            HttpStatus.BAD_REQUEST,
          );
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.i18n.translate('error.SNS_GOOGLE_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async connectGoogle(
    code: string,
    redirectUri: string,
    lang: string,
  ): Promise<GooglePojo> {
    console.log('===google');
    console.log('code ::: ', code);
    console.log('redirectUri ::: ', redirectUri);

    const accessTokenResult: any = await this.getAccessToken(
      code,
      redirectUri,
      lang,
    );
    const accessToken: string = accessTokenResult.access_token;
    const tokenType: string = accessTokenResult.token_type;
    const expiresIn: string = accessTokenResult.expires_in;

    console.log('===google accessTokenResult');
    console.log('accessToken ::: ', accessToken);
    console.log('tokenType ::: ', tokenType);
    console.log('expiresIn ::: ', expiresIn);

    const meResult: GooglePojo = await this.getMe(accessToken, lang);
    meResult.accessToken = accessToken;

    console.log('>> meResult: ', meResult);

    const id: string = meResult.id;
    const name: string | null = meResult.name || null;
    const email: string | null = meResult.email || null;
    const pictureMap: string | null = meResult.picture || null;

    console.log('===google meResult');
    console.log('id ::: ', id);
    console.log('name ::: ', name);
    console.log('email ::: ', email);
    console.log('pictureMap ::: ', pictureMap);

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
    user.socialId.googleId = key;
    user.socialId.googleName = nickname;
    const result = await this.userRepository.update(user.id, {
      socialId: {
        googleId: key,
        googleName: nickname,
      },
    });
    console.log(result, 'result');
    return new Profile(user);
  }
}
