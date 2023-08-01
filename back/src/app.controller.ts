import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext, I18nLang, I18nService } from 'nestjs-i18n';
import { I18nTranslations } from './generated/i18n.generated';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly I18n: I18nService<I18nTranslations>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 언어 확인
  @Get('i18n')
  async i18n(@I18n() i18n: I18nContext): Promise<string> {
    return await i18n.t('test.HELLO');
  }

  @Get('i18n-2')
  async i18n2(@I18nLang() lang: string): Promise<any> {
    return {
      lang,
      key: 'test.HELLO',
      message: this.I18n.translate('test.HELLO', { lang }),
      message2: this.I18n.t('test.PRODUCT.NEW', {
        args: { name: 'Toon' },
        lang,
      }),
    };
  }

  @Get('accept-language')
  async acceptLanguage(@I18nLang() lang: string): Promise<string> {
    return lang;
  }
}
