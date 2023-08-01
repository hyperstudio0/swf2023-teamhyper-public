import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as dotenv from 'dotenv';
import {AuthorityService} from './service/authority/authority.service';
import {UserService} from './service/user/user.service';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AdminModule} from './admin.module';
import * as process from 'process';
import {encryptTest} from './utils/encrypt.utils';
import {PolicyService} from './service/policy/policy.service';
import {BoardService} from './service/board/board.service';
import {BoardCategoryService} from './service/board-category/board-category.service';
import {LocalizedDTO} from './model/localized.dto';
import {SmartContractService} from "./service/smart-contract/smart-contract.service";

async function initDBCreate(app) {
    // Role 초기 설정
    const authorityService = app.get(AuthorityService);
    authorityService.initCreateAuthority();

    // Role 초기 설정
    const userService = app.get(UserService);
    userService.initCreateAdmin();

    // const policyService = app.get(PolicyService);
    // policyService.initCreate();
    //
    // const boardCategoryService = app.get(BoardCategoryService);
    // boardCategoryService.initCreate();

    // const boardService = app.get(BoardService);
    // boardService.initCreate();
}

async function bootstrapApp() {
    const app = await NestFactory.create(AppModule);

    // Swagger 문서 설정
    const config = new DocumentBuilder()
        .setTitle('API 문서')
        .setDescription('API 문서를 위한 설명')
        .setVersion('1.0.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            },
            'Authorization', // 'Authorization' 헤더와 연결
        )
        .build();
    const document = SwaggerModule.createDocument(app, config, {
        extraModels: [LocalizedDTO],
    });
    SwaggerModule.setup('api-doc', app, document);

    console.log(process.env.HOST_SERVICE, 'process.env.HOST_SERVICE');
    // 개발용 (프론트포트)
    app.enableCors({
        origin: process.env.HOST_SERVICE,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
        credentials: true,
    });

    await app.listen(3001);
    console.log(`API Application is running on: ${await app.getUrl()}`);

    initDBCreate(app);

    const smartContractService = app.get(SmartContractService);
    console.log(await smartContractService.count());
    await smartContractService.event();

    encryptTest();
}

async function bootstrapAdmin() {
    const app = await NestFactory.create(AdminModule);

    // Swagger 문서 설정
    const config = new DocumentBuilder()
        .setTitle('Admin 문서')
        .setDescription('Admin 문서를 위한 설명')
        .setVersion('1.0.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            },
            'Authorization', // 'Authorization' 헤더와 연결
        )
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-doc', app, document);

    console.log(process.env.HOST_SERVICE, 'process.env.HOST_SERVICE');
    // 개발용 (프론트포트)
    app.enableCors({
        origin: process.env.HOST_SERVICE,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
        credentials: true,
    });

    await app.listen(3002);
    console.log(`Admin Application is running on: ${await app.getUrl()}`);

    initDBCreate(app);
}

async function bootstrap() {
    // console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
    // console.log(process.env.MODULE_ENV, 'process.env.MODULE_ENV');
    // console.log(process.env.JWT_SECRET_API_KEY, 'process.env.JWT_SECRET_API_KEY');
    // console.log(
    //   process.env.JWT_SECRET_ADMIN_KEY,
    //   'process.env.JWT_SECRET_ADMIN_KEY',
    // );
    const isAppServer = process.env.MODULE_ENV === 'api';
    const isAdminServer = process.env.MODULE_ENV === 'admin';

    dotenv.config(); // .env 파일 로드

    if (isAppServer) {
        await bootstrapApp();
    } else if (isAdminServer) {
        await bootstrapAdmin();
    } else {
        await bootstrapAdmin();
        await bootstrapApp();
    }
}

bootstrap();
