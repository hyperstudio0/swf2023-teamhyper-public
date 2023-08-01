import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Naver,
  SNSConnect,
  SNSReqBody,
  SNSResBody,
} from '../../../../model/sns.dto';
import { I18nLang } from 'nestjs-i18n';
import { NaverService } from '../../../../service/sns/naver/naver.service';
import { Profile } from '../../../../model/login.dto';
import { SocialIdEmbed } from '../../../../domain/user/socialId.embed.';
import { AuthService } from '../../../../service/auth/auth.service';
import { UpdateUserService } from '../../../../service/update.user/update.user.service';
import { Public } from '../../api.auth.guard';

@ApiTags('Social Login (Naver)')
@Controller('api/v1/naver-login')
export class NaverController {
  constructor(
    private readonly naverService: NaverService,
    private readonly authService: AuthService,
    private readonly updateUserService: UpdateUserService,
  ) {}

  @Public()
  @Post()
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 네이버 로그인 연동',
    operationId: 'naverWebLogin',
  })
  @ApiResponse({
    status: 200,
    description: '네이버 로그인 연동 정보',
    type: SNSResBody,
  })
  async webLogin(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: SNSReqBody,
  ): Promise<SNSResBody> {
    const code = body.code;
    const redirectUri = body.redirectUri;
    const state = body.state;
    const response = await this.naverService.connectNaver(
      code,
      redirectUri,
      state,
      lang,
    );
    return this.naverService.naverAuth(response, lang);
  }

  @Public()
  @Post('native')
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 네이버 로그인 연동',
    operationId: 'naverNativeLogin',
  })
  @ApiResponse({
    status: 200,
    description: '네이버 로그인 연동 정보',
    type: SNSResBody,
  })
  async nativeLogin(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: Naver,
  ): Promise<SNSResBody> {
    return this.naverService.naverAuth(body, lang);
  }

  @Public()
  @Post('connect')
  @HttpCode(200)
  @ApiOperation({
    summary: 'CONNECT 상태의 회원 연동',
    operationId: 'naverConnectKey',
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
    return this.naverService.connectKey(body, lang);
  }

  @Post('update')
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 네이버 로그인 연동 (마이페이지 용)',
    operationId: 'naverUpdateConnect',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '네이버 로그인 연동 정보',
    type: SocialIdEmbed,
  })
  async updateConnect(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: SNSReqBody,
  ): Promise<SocialIdEmbed> {
    const authedUser = request.authedUser;
    const code = body.code;
    const redirectUri = body.redirectUri;
    const state = body.state;
    const response = await this.naverService.connectNaver(
      code,
      redirectUri,
      state,
      lang,
    );
    return this.updateUserService.naverUpdateConnect(
      response.response.id,
      response.response.name,
      authedUser.userId,
      lang,
    );
  }
}
