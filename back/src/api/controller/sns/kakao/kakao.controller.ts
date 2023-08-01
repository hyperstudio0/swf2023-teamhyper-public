import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { KakaoService } from '../../../../service/sns/kakao/kakao.service';
import {
  Kakao,
  SNSConnect,
  SNSReqBody,
  SNSResBody,
} from '../../../../model/sns.dto';
import { I18nLang } from 'nestjs-i18n';
import { Profile } from '../../../../model/login.dto';
import { SocialIdEmbed } from '../../../../domain/user/socialId.embed.';
import { AuthService } from '../../../../service/auth/auth.service';
import { UpdateUserService } from '../../../../service/update.user/update.user.service';
import { Public } from '../../api.auth.guard';

@ApiTags('Social Login (Kakao)')
@Controller('api/v1/kakao-login')
export class KakaoController {
  constructor(
    private readonly kakaoService: KakaoService,
    private readonly authService: AuthService,
    private readonly updateUserService: UpdateUserService,
  ) {}

  @Public()
  @Post()
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 카카오 로그인 연동',
    operationId: 'kakaoWebLogin',
  })
  @ApiResponse({
    status: 200,
    description: '카카오 로그인 연동 정보',
    type: SNSResBody,
  })
  async webLogin(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: SNSReqBody,
  ): Promise<SNSResBody> {
    const code = body.code;
    const redirectUri = body.redirectUri;
    const response = await this.kakaoService.connectKakao(
      code,
      redirectUri,
      lang,
    );
    return this.kakaoService.kakaoAuth(response, lang);
  }

  @Public()
  @Post('native')
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 카카오 로그인 연동',
    operationId: 'kakaoNativeLogin',
  })
  @ApiResponse({
    status: 200,
    description: '카카오 로그인 연동 정보',
    type: SNSResBody,
  })
  async nativeLogin(
    @I18nLang() lang: string,
    @Req() request,
    @Body() body: Kakao,
  ): Promise<SNSResBody> {
    return this.kakaoService.kakaoAuth(body, lang);
  }

  @Public()
  @Post('connect')
  @HttpCode(200)
  @ApiOperation({
    summary: 'CONNECT 상태의 회원 연동',
    operationId: 'kakaoConnectKey',
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
    return this.kakaoService.connectKey(body, lang);
  }

  @Post('update')
  @HttpCode(200)
  @ApiOperation({
    summary: '웹용 카카오 로그인 연동 (마이페이지 용)',
    operationId: 'kakaoUpdateConnect',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '카카오 로그인 연동 정보',
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
    const response = await this.kakaoService.connectKakao(
      code,
      redirectUri,
      lang,
    );
    return this.updateUserService.kakaoUpdateConnect(
      response.id,
      response.kakao_account.email,
      authedUser.userId,
      lang,
    );
  }
}
