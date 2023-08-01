import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
import * as process from 'process';
import moduleManager from './module.manager';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // .env 파일 경로 설정
    }),
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_API_KEY, // JWT 비밀키 설정
      signOptions: { expiresIn: '1h' }, // 토큰 만료 시간 설정
    }),
    I18nModule.forRoot({
      fallbackLanguage: process.env.DEFAULT_LANG,
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
      typesOutputPath: path.join(
        __dirname,
        '../src/generated/i18n.generated.ts',
      ),
    }),
  ],
  providers: moduleManager.api.providers,
  controllers: moduleManager.api.controllers,
})
export class AppModule {}
