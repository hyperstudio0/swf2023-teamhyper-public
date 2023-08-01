import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResResult } from '../../../model/result.dto';
import { AuthService } from '../../../service/auth/auth.service';
import { UpdateUserService } from '../../../service/update.user/update.user.service';
import { I18n, I18nContext, I18nLang } from 'nestjs-i18n';
import { SuccessJoin } from '../../../model/login.dto';
import {
  ConfirmCode,
  CreatePassword,
  MarketingUpdatedBody,
  UpdateBoolean,
  UpdateEmail,
  UpdateNickname,
  UpdatePassword,
} from '../../../model/account.dto';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { IdvService } from '../../../service/idv/idv.service';

@ApiTags('회원 수정')
@Controller('api/v1/user')
export class UpdateUserController {
  constructor(
    private readonly authService: AuthService,
    private readonly updateUserService: UpdateUserService,
    private readonly idvService: IdvService,
  ) {}

  @Post('send-email-verification')
  @ApiOperation({
    summary: '이메일 수정 (이메일 인증 코드 발송)',
    operationId: 'sendEmailVerification',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateEmail, description: '이메일 수정' })
  @ApiResponse({
    status: 200,
    description: '이메일 인증 코드 발송 결과',
    type: ResResult,
  })
  async sendEmailVerification(
    @Req() request,
    @Body() body: UpdateEmail, // 변경할 이메일 주소
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<ResResult> {
    const authedUser = request.authedUser;
    if (!authedUser || !authedUser.userId) {
      throw new HttpException(
        i18n.t('error.UNAUTHORIZED'),
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!body || !body.email || body.email === authedUser.email) {
      throw new HttpException(
        i18n.t('account.USER_UPDATE.CREATE_EMAIL_FAILED'),
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.updateUserService.sendEmailVerification(
      body.email,
      authedUser.userId,
      lang,
    );
  }

  @Post('confirm-email-verification')
  @ApiOperation({
    summary:
      '이메일 수정 (이메일 인증 코드 확인 및 수정완료 > accessToken 재발급)',
    description: '[주의] 처리 후, 로그인 처리를 다시 해주세요',
    operationId: 'confirmEmailVerification',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: ConfirmCode, description: '인증 코드' })
  @ApiResponse({
    status: 200,
    description: '이메일 인증 코드 확인 결과',
    type: SuccessJoin,
  })
  async confirmEmailVerification(
    @Req() request,
    @Body() body: ConfirmCode,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<SuccessJoin> {
    const authedUser = request.authedUser;
    if (!body || !body.code) {
      throw new HttpException(
        i18n.t('account.USER_UPDATE.CREATE_EMAIL_FAILED'),
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.updateUserService.confirmEmailVerification(
      body.code,
      authedUser.userId,
      lang,
    );
  }

  // TODO send-mobile-verification
  // TODO confirm-mobile-verification

  @Post('nickname/duplicate')
  @ApiOperation({
    summary: '닉네임 중복 체크',
    description: 'true: 존재함, false: 존재하지 않음',
    operationId: 'duplicateNickname',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateNickname, description: '닉네임' })
  @ApiResponse({
    status: 200,
    description: '닉네임 중복 체크 확인 결과',
    type: ResResult,
  })
  async duplicateNickname(
    @Req() request,
    @Body() body: UpdateNickname,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<ResResult> {
    const authedUser = request.authedUser;
    if (!body || !body.nickname) {
      throw new HttpException(
        i18n.t('account.USER_UPDATE.NICKNAME.EMPTY'),
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.updateUserService.duplicateNickname(
      authedUser.userId,
      body.nickname,
      lang,
    );
  }

  @Post('nickname/change')
  @ApiOperation({
    summary: '닉네임 중복 체크',
    description: 'true: 존재함, false: 존재하지 않음',
    operationId: 'changeNickname',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateNickname, description: '닉네임' })
  @ApiResponse({
    status: 200,
    description: '닉네임 중복 체크 확인 결과',
    type: ResResult,
  })
  async changeNickname(
    @Req() request,
    @Body() body: UpdateNickname,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<SuccessJoin> {
    const authedUser = request.authedUser;
    if (!body || !body.nickname) {
      throw new HttpException(
        i18n.t('account.USER_UPDATE.NICKNAME.EMPTY'),
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.updateUserService.changeNickname(
      authedUser.userId,
      body.nickname,
      lang,
    );
  }

  @Post('password/change')
  @ApiOperation({
    summary: '비밀번호 변경',
    operationId: 'changePassword',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdatePassword, description: '비밀번호' })
  @ApiResponse({
    status: 200,
    description: '비밀번호 변경 결과',
    type: ResResult,
  })
  async changePassword(
    @Req() request,
    @Body() body: UpdatePassword,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<ResResult> {
    const authedUser = request.authedUser;
    return this.updateUserService.changePassword(
      authedUser.userId,
      body.oldPassword,
      body.newPassword,
      body.confirmPassword,
      lang,
    );
  }

  @Post('marketing')
  @ApiOperation({
    summary: '마케팅 수신 동의 변경',
    operationId: 'changeMarketing',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateBoolean, description: '수신 동의 여부' })
  @ApiResponse({
    status: 200,
    description: '마케팅 수신 동의 결과',
    type: ResResult,
  })
  async changeMarketing(
    @Req() request,
    @Body() body: UpdateBoolean,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<ResResult> {
    const authedUser = request.authedUser;
    return this.updateUserService.changeMarketing(
      authedUser.userId,
      body.value,
      lang,
    );
  }

  @Post('sms-rcv')
  @ApiOperation({
    summary: 'SMS/LMS 수신 동의 변경',
    operationId: 'changeSmsRcv',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateBoolean, description: '수신 동의 여부' })
  @ApiResponse({
    status: 200,
    description: 'SMS/LMS 수신 동의 결과',
    type: MarketingUpdatedBody,
  })
  async changeSmsRcv(
    @Req() request,
    @Body() body: UpdateBoolean,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<MarketingUpdatedBody> {
    const authedUser = request.authedUser;
    return this.updateUserService.changeSmsRcv(
      authedUser.userId,
      body.value,
      lang,
    );
  }

  @Post('email-rcv')
  @ApiOperation({
    summary: '이메일 수신 동의 변경',
    operationId: 'changeEmailRcv',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateBoolean, description: '수신 동의 여부' })
  @ApiResponse({
    status: 200,
    description: '이메일 수신 동의 결과',
    type: MarketingUpdatedBody,
  })
  async changeEmailRcv(
    @Req() request,
    @Body() body: UpdateBoolean,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<MarketingUpdatedBody> {
    const authedUser = request.authedUser;
    return this.updateUserService.changeEmailRcv(
      authedUser.userId,
      body.value,
      lang,
    );
  }

  @Post('kakao-rcv')
  @ApiOperation({
    summary: '카카오 알림톡 수신 동의 변경',
    operationId: 'changeKakaoRcv',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateBoolean, description: '수신 동의 여부' })
  @ApiResponse({
    status: 200,
    description: '카카오 알림톡 수신 동의 결과',
    type: MarketingUpdatedBody,
  })
  async changeKakaoRcv(
    @Req() request,
    @Body() body: UpdateBoolean,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<MarketingUpdatedBody> {
    const authedUser = request.authedUser;
    return this.updateUserService.changeKakaoRcv(
      authedUser.userId,
      body.value,
      lang,
    );
  }

  @Post('push-rcv')
  @ApiOperation({
    summary: '모바일 푸시 수신 동의 변경',
    operationId: 'changePushRcv',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateBoolean, description: '수신 동의 여부' })
  @ApiResponse({
    status: 200,
    description: '모바일 푸시 수신 동의 결과',
    type: MarketingUpdatedBody,
  })
  async changePushRcv(
    @Req() request,
    @Body() body: UpdateBoolean,
    @I18nLang() lang: string,
    @I18n() i18n: I18nContext,
  ): Promise<MarketingUpdatedBody> {
    const authedUser = request.authedUser;
    return this.updateUserService.changePushRcv(
      authedUser.userId,
      body.value,
      lang,
    );
  }

  @Post('idv-confirm-update/:tid')
  @ApiOperation({
    summary: '내정보 수정 (본인인증 전용)',
    operationId: 'idvConfirmUpdate',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '수정 결과',
    type: ResResult,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async idvConfirmUpdate(
    @Req() request,
    @Param('tid') tid: string,
    @I18nLang() lang: string,
  ): Promise<ResResult> {
    const authedUser = request.authedUser;
    const idvSuccess = await this.idvService.confirm(tid);
    return this.updateUserService.updateIdvUser(
      idvSuccess,
      authedUser.userId,
      lang,
    );
  }

  @Post('create-password')
  @ApiOperation({
    summary: '비밀번호 생성 (네이버 가입, 비밀번호 등록이 안된 계정)',
    operationId: 'createPassword',
  })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: CreatePassword, description: '비밀번호' })
  @ApiResponse({
    status: 200,
    description: '수정 결과',
    type: ResResult,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async createPassword(
    @Req() request,
    @Body() body: CreatePassword,
    @I18nLang() lang: string,
  ): Promise<ResResult> {
    const authedUser = request.authedUser;
    return await this.updateUserService.createPassword(
      body,
      authedUser.userId,
      lang,
    );
  }
}
