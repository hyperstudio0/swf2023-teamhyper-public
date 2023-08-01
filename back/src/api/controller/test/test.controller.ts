import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmailService } from '../../../service/email/email.service';
import { I18nLang } from 'nestjs-i18n';
import { UserService } from '../../../service/user/user.service';

@ApiTags('API Test')
@Controller('api/v1/test')
export class TestController {
  constructor(
    private readonly emailService: EmailService,
    private readonly userService: UserService,
  ) {}

  @Post('email')
  @ApiOperation({ summary: '이메일 발신 테스트', operationId: 'testEmail' })
  @ApiResponse({
    status: 200,
  })
  async email(@I18nLang() lang: string): Promise<string> {
    const user = await this.userService.findByEmail('wini@aartkorea.com');
    return `${await this.emailService.sendSignupCompletion(user, lang)}`;
  }
}
