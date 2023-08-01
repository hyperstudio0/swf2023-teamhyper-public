import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../../../service/auth/auth.service';
import { UserService } from '../../../service/user/user.service';
import {
  AuthedUser,
  Profile,
  ReqLogin,
  ResLogin,
} from '../../../model/login.dto';
import { I18nLang } from 'nestjs-i18n';
import { Public } from '../admin.auth.guard';

@ApiTags('회원')
@Controller('api/v1/user')
export class AdminUserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Post('login')
  @ApiOperation({ summary: '로그인 정보', operationId: 'userLogin' })
  @ApiBody({ type: ReqLogin, description: '이메일,비밀번호' })
  @ApiResponse({
    status: 200,
    description: '로그인 성공',
    type: ResLogin,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async login(
    @I18nLang() lang: string,
    @Body() loginDto: ReqLogin,
  ): Promise<ResLogin> {
    return { access_token: await this.authService.login(loginDto, lang) };
  }

  @Get('authed-user')
  @ApiOperation({
    summary: 'JWT Access_token 확인',
    operationId: 'userAuthedUser',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '로그인 인증 정보',
    type: AuthedUser,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async authedUser(
    @Req() request,
    @I18nLang() lang: string,
  ): Promise<AuthedUser> {
    return request.authedUser;
  }

  @Get('me')
  @ApiOperation({
    summary: '내 정보',
    operationId: 'userMe',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '로그인 인증 정보',
    type: Profile,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async me(@Req() request, @I18nLang() lang: string): Promise<Profile> {
    const authedUser = request.authedUser;
    return this.userService.getProfile(authedUser.userId);
  }
}
