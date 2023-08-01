import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReqFindPwd } from '../../../model/login.dto';
import { I18n, I18nContext, I18nService } from 'nestjs-i18n';
import { ResResult } from '../../../model/result.dto';
import { I18nTranslations } from '../../../generated/i18n.generated';
import { Public } from '../api.auth.guard';

@ApiTags('회원 찾기')
@Controller('api/v1/user')
export class FindController {
  constructor(private readonly I18n: I18nService<I18nTranslations>) {}

  @Public()
  @Post('/find-pwd')
  @ApiOperation({ summary: '비밀번호 찾기' })
  @ApiBody({ type: ReqFindPwd, description: '이메일' })
  @ApiResponse({
    status: 200,
    description: '발신 성공',
    type: ResResult,
  })
  @ApiResponse({ status: 401, description: '발신 실패' })
  async login(
    @I18n() i18n: I18nContext,
    @Body() findPwd: ReqFindPwd,
  ): Promise<ResResult> {
    return {
      result: true,
      message: await i18n.t('find.FIND.PWD_SEND_AUTH_EMAIL'),
    };
  }
}
