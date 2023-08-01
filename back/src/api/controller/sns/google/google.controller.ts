import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  GooglePojo,
  SNSConnect,
  SNSReqBody,
  SNSResBody,
} from '../../../../model/sns.dto';
import { I18nLang } from 'nestjs-i18n';
import { GoogleService } from '../../../../service/sns/google/google.service';
import { Profile } from '../../../../model/login.dto';
import { UpdateUserService } from '../../../../service/update.user/update.user.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { SocialIdEmbed } from '../../../../domain/user/socialId.embed.';
import { Public } from '../../api.auth.guard';

@ApiTags('Social Login (Google)')
@Controller('api/v1/google-login')
export class GoogleController {
  constructor(
    private readonly googleService: GoogleService,
    private readonly authService: AuthService,
    private readonly updateUserService: UpdateUserService,
  ) {}

  @Public()
  @Post()
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 구글 로그인 연동',
    operationId: 'googleWebLogin',
  })
  @ApiResponse({
    status: 200,
    description: '구글 로그인 연동 정보',
    type: SNSResBody,
  })
  async webLogin(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: SNSReqBody,
  ): Promise<SNSResBody> {
    const code = body.code;
    const redirectUri = body.redirectUri;
    const response = await this.googleService.connectGoogle(
      code,
      redirectUri,
      lang,
    );
    return this.googleService.googleAuth(response, lang);
  }

  @Public()
  @Post('native')
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 구글 로그인 연동',
    operationId: 'googleNativeLogin',
  })
  @ApiResponse({
    status: 200,
    description: '구글 로그인 연동 정보',
    type: SNSResBody,
  })
  async nativeLogin(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: GooglePojo,
  ): Promise<SNSResBody> {
    return this.googleService.googleAuth(body, lang);
  }

  @Public()
  @Post('connect')
  @HttpCode(200)
  @ApiOperation({
    summary: 'CONNECT 상태의 회원 연동',
    operationId: 'googleConnectKey',
  })
  @ApiResponse({
    status: 200,
    description: '회원 정보',
    type: Profile,
  })
  async connectKey(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: SNSConnect,
  ): Promise<Profile> {
    return this.googleService.connectKey(body, lang);
  }

  @Post('update')
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 구글 로그인 연동 (마이페이지 용)',
    operationId: 'googleUpdateConnect',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '구글 로그인 연동 정보',
    type: SocialIdEmbed,
  })
  async updateConnect(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: SNSReqBody,
  ): Promise<SocialIdEmbed> {
    console.log(body, 'body');
    const authedUser = request.authedUser;
    const code = body.code;
    const redirectUri = body.redirectUri;
    const response = await this.googleService.connectGoogle(
      code,
      redirectUri,
      lang,
    );
    return this.updateUserService.googleUpdateConnect(
      response.id,
      response.name,
      authedUser.userId,
      lang,
    );
  }
}
