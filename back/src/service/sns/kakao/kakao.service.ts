import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../../generated/i18n.generated';
import {
  AccessTokenResponse,
  Kakao,
  SNSConnect,
  SNSResBody,
  SNSStatus,
  SNSType,
} from '../../../model/sns.dto';
import axios from 'axios';
import { UserEntity } from '../../../domain/user/user.entity';
import { KeyMessage } from '../../../model/default.dto';
import { Profile } from '../../../model/login.dto';
import { isEmpty } from '../../../utils/string.utils';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class KakaoService {
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
    const accessTokenUri = new URL(process.env.KAKAO_ACCESS_TOKEN_URI);
    console.debug('uri :::', accessTokenUri.toString());

    const formData = new URLSearchParams();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', process.env.KAKAO_CLIENT_ID);
    formData.append('client_secret', process.env.KAKAO_SECRET_KEY);
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
        this.i18n.translate('error.SNS_KAKAO_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getMe(accessToken: string, lang: string): Promise<Kakao> {
    const meUri = new URL(process.env.KAKAO_ME_URI);
    meUri.searchParams.append('access_token', accessToken);
    console.debug('uri :::', meUri.toString());

    try {
      const response = await axios.get<Kakao>(meUri.toString());

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('> response:', response.data);
        throw new HttpException(response.data, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.i18n.translate('error.SNS_KAKAO_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getStatus(kakao: Kakao): Promise<KeyMessage> {
    console.log(kakao, 'kakao');
    const kakaoAccount = kakao.kakao_account;
    const userOpt = await this.userRepository.getByKakaoId(kakao.id);
    if (userOpt) {
      return SNSStatus.LINKED; // 이미 연동되어있음
    } else if (kakaoAccount.email !== undefined && kakaoAccount.email !== '') {
      const user = await this.userRepository.getByEmail(kakaoAccount.email);

      if (user) {
        if (user.leaveMeta.leave) {
          return SNSStatus.LEAVED_ACCOUNT; // 탈퇴한 계정
        }

        if (!user.socialId?.kakaoId) {
          // const socialId: SocialIdEmbed = user.socialId ?? new SocialIdEmbed();
          // socialId.kakaoId = kakao.id;
          // socialId.kakaoName = kakao.nickName;
          // user.socialId = socialId;

          // if (kakao.profileImage !== undefined && kakao.profileImage !== '') {
          //   user.image = kakao.profileImage;
          // }

          // await this.userRepository.save(user);
          return SNSStatus.CONNECT; // 연동 후 로그인
        } else {
          return SNSStatus.NOT_MATCH_SNS; // 다른 카카오 ID로 이미 연동되어 있음
        }
      } else {
        return SNSStatus.NOT_EXISTED_ACCOUNT; // 존재하지 않는 계정
      }
    } else {
      return SNSStatus.NOT_PROVIDED_EMAIL; // 제공되지 않은 이메일
    }
  }

  async kakaoAuth(kakao: Kakao, lang: string): Promise<SNSResBody> {
    try {
      const kakaoAccount = kakao.kakao_account;
      const status: KeyMessage = await this.getStatus(kakao);
      const body: SNSResBody = new SNSResBody();

      console.debug('kakao :::', kakao);
      console.debug('status :::', status);
      body.status = status;
      body.snsType = SNSType.KAKAO;
      body.id = kakao.id;
      // body.name = kakaoAccount.nickName;
      body.email = kakaoAccount.email;

      switch (status) {
        case SNSStatus.LINKED: {
          const user: UserEntity = await this.userRepository.getByKakaoId(
            kakao.id,
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
            this.i18n.translate('error.SNS_KAKAO_ERROR', { lang }),
            HttpStatus.BAD_REQUEST,
          );
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.i18n.translate('error.SNS_KAKAO_ERROR', { lang }),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async connectKakao(
    code: string,
    redirectUri: string,
    lang: string,
  ): Promise<Kakao> {
    console.log('===kakao');
    console.log('code ::: ', code);
    console.log('redirectUri ::: ', redirectUri);

    const accessTokenResult: any = await this.getAccessToken(
      code,
      redirectUri,
      lang,
    );
    const accessToken: string = accessTokenResult.access_token;
    const refreshToken: string = accessTokenResult.refresh_token;
    const tokenType: string = accessTokenResult.token_type;
    const expiresIn: string = accessTokenResult.expires_in;
    const scope: string = accessTokenResult.scope;
    const refreshTokenExpiresIn: string =
      accessTokenResult.refresh_token_expires_in;

    console.log('===KAKAO accessTokenResult');
    console.log('accessToken ::: ', accessToken);
    console.log('refreshToken ::: ', refreshToken);
    console.log('tokenType ::: ', tokenType);
    console.log('expiresIn ::: ', expiresIn);
    console.log('scope ::: ', scope);
    console.log('refresh_token_expires_in ::: ', refreshTokenExpiresIn);

    const meResult: Kakao = await this.getMe(accessToken, lang);

    console.log('>> meResult: ', meResult);

    const id: string = meResult.id;
    // const name: string | null = meResult.kakao_account.nickName || null;
    const email: string | null = meResult.kakao_account.email || null;
    // const pictureMap: string | null = meResult.kakao_account.profileImage || null;

    console.log('===KAKAO meResult');
    console.log('id ::: ', id);
    // console.log('name ::: ', name);
    console.log('email ::: ', email);
    // console.log('pictureMap ::: ', pictureMap);

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
    user.socialId.kakaoId = key;
    user.socialId.kakaoName = nickname;
    const result = await this.userRepository.update(user.id, {
      socialId: {
        kakaoId: key,
        kakaoName: nickname,
      },
    });
    console.log(result, 'result');
    return new Profile(user);
  }
}
