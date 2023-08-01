import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { SettingService } from '../../../service/setting/setting.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { I18nLang } from 'nestjs-i18n';
import {
  BooleanSetting,
  LanguageSetting,
  SettingDTO,
} from '../../../model/setting.dto';
import {
  allLanguage,
  MODE,
  onlyKorean,
} from '../../../domain/setting/setting.entity';
import * as process from 'process';

@ApiTags('설정')
@Controller('/api/setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}
  @Get()
  @ApiOperation({
    summary: '설정 정보 보기',
    operationId: 'getSetting',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '설정 정보',
    type: [SettingDTO],
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async getSetting(
    @Req() request,
    @I18nLang() lang: string,
  ): Promise<SettingDTO[]> {
    return await this.settingService.getAll(request.authedUser.userId);
  }

  @Get('/default-language')
  @ApiOperation({
    summary: '기본언어 설정 보기',
    operationId: 'getSettingDefaultLang',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '기본언어 설정 정보',
    type: SettingDTO,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async getDefaultLang(
    @Req() request,
    @I18nLang() lang: string,
  ): Promise<SettingDTO> {
    return new SettingDTO(MODE.DEFAULT_LANGUAGE, process.env.DEFAULT_LANG);
  }

  @Get('multilingual')
  @ApiOperation({
    summary: '다국어 설정',
    operationId: 'getSettingMultilingual',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '다국어 설정 정보',
    type: BooleanSetting,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async getMultilingual(
    @Req() request,
    @I18nLang() lang: string,
  ): Promise<BooleanSetting> {
    return new BooleanSetting(
      await this.settingService.getMultilingual(request.authedUser.userId),
    );
  }

  @Post('multilingual')
  @ApiOperation({
    summary: '다국어 설정',
    operationId: 'setSettingMultilingual',
  })
  @ApiBody({
    type: BooleanSetting,
    description: '언어 설정 Payload',
    examples: {
      '한국어 기본 (다국어 모드 해제)': {
        value: new BooleanSetting(false),
      },
      '다국어 모드 활성': {
        value: new BooleanSetting(true),
      },
    },
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '다국어 설정 정보',
    type: BooleanSetting,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async postMultilingual(
    @Req() request,
    @Body() body: BooleanSetting, // 변경할 이메일 주소
    @I18nLang() lang: string,
  ): Promise<BooleanSetting> {
    console.log(body, 'body');
    await this.settingService.setMultilingual(
      body.value,
      request.authedUser.userId,
    );
    return body;
  }

  @Get('language')
  @ApiOperation({
    summary: '다국어 언어 설정',
    operationId: 'getSettingLanguage',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '다국어 언어 설정 정보',
    type: LanguageSetting,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async getLanguage(
    @Req() request,
    @I18nLang() lang: string,
  ): Promise<LanguageSetting> {
    return this.settingService.getLanguage(request.authedUser.userId);
  }

  @Post('language')
  @ApiOperation({
    summary: '다국어 언어 설정',
    operationId: 'setSettingLanguage',
  })
  @ApiBody({
    type: LanguageSetting,
    description: '언어 설정 Payload',
    examples: {
      '오직 한국어 설정': {
        summary: '오직 한국어 설정',
        value: onlyKorean,
      },
      '모든 언어 설정': {
        summary: '모든 언어 설정',
        value: allLanguage,
      },
    },
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '다국어 언어 설정 정보',
    type: LanguageSetting,
  })
  @ApiResponse({ status: 401, description: '인증 실패' })
  async postLanguage(
    @Req() request,
    @Body() body: LanguageSetting, // 변경할 이메일 주소
    @I18nLang() lang: string,
  ): Promise<LanguageSetting> {
    console.log(body, 'body');
    await this.settingService.setLanguage(body, request.authedUser.userId);
    return body;
  }
}
