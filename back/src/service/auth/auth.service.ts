import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../../domain/user/user.entity';
import { UserService } from '../user/user.service';
import { AuthedUser, ReqLogin } from '../../model/login.dto';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { extractTokenFromHeader, jwtPayload } from '../../utils/auth.utils';
import { isNotEmpty } from 'class-validator';
import process from 'process';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async validateUser(
    email: string,
    password: string,
    lang: string,
  ): Promise<UserEntity | null> {
    const user = await this.userService.findByEmail(email);
    if (user) {
      if (user.blocked) {
        throw new HttpException(
          this.i18n.translate('error.LOGIN_EMPTY_USER', { lang }),
          HttpStatus.UNAUTHORIZED,
        );
      }

      if (!(await this.userService.checkPassword(user, password))) {
        throw new HttpException(
          this.i18n.translate('error.LOGIN_NOT_MATCH_PWD', { lang }),
          HttpStatus.UNAUTHORIZED,
        );
      }
      return user;
    }
    throw new HttpException(
      this.i18n.translate('error.LOGIN_EMPTY_USER', { lang }),
      HttpStatus.UNAUTHORIZED,
    );
  }

  async login(login: ReqLogin, lang: string): Promise<string> {
    const { email, password } = login;
    const user = await this.validateUser(email, password, lang);
    if (!user) {
      throw new HttpException(
        this.i18n.translate('error.LOGIN_EMPTY_USER', { lang }),
        HttpStatus.UNAUTHORIZED,
      );
    }
    const hasPermission = user.authorities.some((authority) => {
      return ['ADMIN', 'SUPER'].includes(authority.role);
    });
    if (!hasPermission) {
      throw new UnauthorizedException();
    }
    return this.jwtService.sign(await jwtPayload(user));
  }

  async authedUser(
    request: any,
    required: boolean,
    lang: string,
  ): Promise<AuthedUser> {
    const authedUser = new AuthedUser();
    authedUser.userId = undefined;
    authedUser.email = undefined;
    authedUser.role = undefined;
    if (!request || !request.headers) {
      return authedUser;
    }
    // Request 객체에서 헤더의 Authorization 값을 가져옵니다.
    const token = extractTokenFromHeader(request);
    // console.log(this.jwtService.decode(token), 'decode');
    // 추출한 토큰을 사용하여 JWT 페이로드를 검증합니다.
    console.log(token, 'token');
    if (required && (!token || token === '')) {
      throw new HttpException(
        this.i18n.translate('error.UNAUTHORIZED', { lang }),
        HttpStatus.UNAUTHORIZED,
      );
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET_API_KEY,
      });

      const userId = payload['sub'];
      const email = payload['email'];
      const role = payload['role'];

      authedUser.userId = userId;
      authedUser.email = email;
      authedUser.role = role;

      // 사용자 정보를 반환하거나, 다른 작업을 수행합니다.
      return authedUser;
    } catch (error) {
      console.error(error, 'error');
    }
    if (!required) {
      throw new HttpException(
        this.i18n.translate('error.UNAUTHORIZED', { lang }),
        HttpStatus.UNAUTHORIZED,
      );
    }
    return authedUser;
  }
}
