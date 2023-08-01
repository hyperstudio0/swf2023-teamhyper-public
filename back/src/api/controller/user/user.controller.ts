import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../../../service/auth/auth.service';
import { UserService } from '../../../service/user/user.service';
import {
  AuthedUser,
  IdvSuccess,
  Profile,
  ReqLeave,
  ReqLogin,
  ResLogin,
  SuccessJoin,
  UserJoin,
} from '../../../model/login.dto';
import { I18n, I18nContext, I18nLang } from 'nestjs-i18n';
import { UserEntity } from '../../../domain/user/user.entity';
import { IdvService } from '../../../service/idv/idv.service';
import { IdvReadyResult } from '../../../model/idv.dto';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { EmailService } from '../../../service/email/email.service';
import { ResResult } from '../../../model/result.dto';
import { UpdateUserService } from '../../../service/update.user/update.user.service';
import { Public } from '../api.auth.guard';
import { UpdateNickname } from '../../../model/account.dto';

@ApiTags('회원')
@Controller('api/v1/user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly idvService: IdvService,
    private readonly emailService: EmailService,
    private readonly updateUserService: UpdateUserService,
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
    // return this.authService.authedUser(request, true, lang);
    return request.authedUser;
  }

  @Public()
  @Post('join')
  @ApiOperation({ summary: '회원가입', operationId: 'userJoin' })
  @ApiResponse({
    status: 200,
    description: '로그인 인증 정보',
    type: SuccessJoin,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async join(
    @Req() request,
    @I18nLang() lang: string,
    @Body() user: UserJoin,
  ): Promise<SuccessJoin> {
    const userEntity = new UserEntity();
    userEntity.nickname = user.nickname;
    userEntity.fullName = user.fullName;
    userEntity.mobile = user.mobile;
    userEntity.email = user.email;
    userEntity.password = user.password;
    userEntity.termsAgree = user.termsAgree;
    console.log('termsAgreetermsAgree', userEntity.termsAgree.taService);
    userEntity.socialId = user.socialId;
    userEntity.countryCode = user.countryCode;
    userEntity.verification = {
      email: false,
      mobile: true,
    };

    return this.userService.join(userEntity, lang);
  }

  @Public()
  @Post('create/nickname/duplicate')
  @ApiOperation({
    summary: '닉네임 중복 체크',
    description: 'true: 존재함, false: 존재하지 않음',
    operationId: 'userCreateDuplicateNickname',
  })
  @ApiBody({ type: UpdateNickname, description: '닉네임' })
  @ApiResponse({
    status: 200,
    description: '닉네임 중복 체크 확인 결과',
    type: ResResult,
  })
  async createDuplicateNickname(
    @Req() request,
    @Body() body: UpdateNickname,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<ResResult> {
    if (!body || !body.nickname) {
      throw new HttpException(
        i18n.t('account.USER_UPDATE.NICKNAME.EMPTY'),
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userService.duplicateNickname(body.nickname, lang);
  }

  @Public()
  @Get('idv-ready')
  @ApiOperation({
    summary: '본인인증 ready',
    operationId: 'userIdvReady',
  })
  @ApiQuery({
    name: 'returnUri',
    description: '본인인증 처리 후, 복귀할 uri',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: '본인인증 요청 키값 code === 0000 : 성공',
    type: IdvReadyResult,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async idvReady(
    @Req() request,
    @Query('returnUri') returnUri: string,
  ): Promise<IdvReadyResult> {
    return this.idvService.ready(returnUri);
  }

  @Public()
  @Post('idv-confirm/:tid')
  @ApiOperation({
    summary: '본인인증 confirm',
    operationId: 'userIdvConfirm',
  })
  @ApiResponse({ status: 400, description: '인증 실패' })
  async idvConfirm(
    @Req() request,
    @Param('tid') tid: string,
  ): Promise<IdvSuccess> {
    return this.idvService.confirm(tid);
  }

  @Post('send-verification-email')
  @ApiOperation({
    summary: '이메일 인증',
    operationId: 'userSendVerificationEmail',
  })
  @ApiBearerAuth('Authorization')
  async sendVerificationEmail(
    @Req() request,
    @I18nLang() lang: string,
  ): Promise<boolean> {
    return this.userService.sendVerificationEmail(request.authedUser, lang);
  }

  @Public()
  @Get('confirm-verification-email')
  @ApiOperation({
    summary: '이메일 인증',
    operationId: 'userConfirmVerificationEmail',
  })
  @ApiResponse({
    status: 200,
    description: '이메일 인증 결과',
    type: ResResult,
  })
  async confirmVerificationEmail(
    @Req() request,
    @Query('key') key: string,
    @I18nLang() lang: string,
  ): Promise<ResResult> {
    return this.userService.confirmVerificationEmail(key);
  }

  @Public()
  @Post('unsubscribe-email/:key')
  @ApiOperation({
    summary: '회원 이메일 수신 거절',
    operationId: 'userUnsubscribeEmail',
  })
  @ApiResponse({
    status: 200,
    description: '회원 이메일 수신 거절 결과',
    type: ResResult,
  })
  async unsubscribeEmail(
    @Req() request,
    @Param('key') key: string,
  ): Promise<ResResult> {
    console.log('trst');
    return this.emailService.unsubscribe(key);
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

  @Post('leave')
  @ApiOperation({
    summary: '회원탈퇴',
    operationId: 'userLeave',
  })
  @ApiBody({ type: ReqLeave, description: '탈퇴사유,비밀번호' })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '탈퇴 결과',
    type: ResResult,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async leave(
    @Req() request,
    @Body() body: ReqLeave,
    @I18nLang() lang: string,
  ): Promise<ResResult> {
    const authedUser = request.authedUser;
    return this.userService.leave(body, authedUser.userId, lang);
  }
}
