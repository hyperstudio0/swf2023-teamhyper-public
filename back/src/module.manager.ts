import {AppController} from './app.controller';
import {UserController} from './api/controller/user/user.controller';
import {FindController} from './api/controller/find/find.controller';
import {AdminUserController} from './admin/controller/user/user.controller';
import {TestController} from './api/controller/test/test.controller';

import {AppService} from './app.service';
import {AuthService} from './service/auth/auth.service';
import {UserService} from './service/user/user.service';
import {SettingRepository} from './domain/setting/setting.repository';
import {UserRepository} from './domain/user/user.repository';
import {AuthorityService} from './service/authority/authority.service';
import {AuthorityEntityRepository} from './domain/authority/authority.repository';
import {UpdateUserService} from './service/update.user/update.user.service';
import {PolicyRepository} from './domain/policy/policy.repository';
import {PolicyService} from './service/policy/policy.service';
import {BoardRepository} from './domain/board/board.repository';
import {BoardCategoryRepository} from './domain/board/category.board.repository';
import {BoardService} from './service/board/board.service';
import {BoardCategoryService} from './service/board-category/board-category.service';

import {GoogleService} from './service/sns/google/google.service';
import {GoogleController} from './api/controller/sns/google/google.controller';

import {NaverService} from './service/sns/naver/naver.service';
import {NaverController} from './api/controller/sns/naver/naver.controller';
import {KakaoService} from './service/sns/kakao/kakao.service';
import {KakaoController} from './api/controller/sns/kakao/kakao.controller';

import {UpdateUserController} from './api/controller/update.user/update.user.controller';
import {PolicyController} from './api/controller/policy/policy.controller';
import {BoardController} from './api/controller/board/board.controller';
import {BoardAdminController} from './admin/controller/board/board.admin.controller';
import {BoardCategoryController} from './api/controller/board-category/board-category.controller';
import {SettingController} from './admin/controller/setting/setting.controller';

import {IdvService} from './service/idv/idv.service';
import {EmailService} from './service/email/email.service';
import {AwsService} from './service/aws/aws.service';
import {APP_GUARD} from '@nestjs/core';
import {ApiAuthGuard} from './api/controller/api.auth.guard';
import {AdminAuthGuard} from './admin/controller/admin.auth.guard';
import {SettingService} from './service/setting/setting.service';

import {AzureSpeechController} from './api/controller/azure/speech/speech.controller';
import {AzureService} from './service/azure/azure.service';

import {SmartContractService} from './service/smart-contract/smart-contract.service';
import {SmartContractController} from './api/controller/smart-contract/smart-contract.controller';

import {TxHashRepository} from './domain/txhash/txhash.repository'
import {TxHashService} from './service/tx-hash/tx-hash.service';

import { TxHashController } from './api/controller/tx-hash/tx-hash.controller';

const apiControllers = [
    AppController,
    UserController,
    UpdateUserController,
    FindController,
    GoogleController,
    NaverController,
    KakaoController,
    TestController,
    PolicyController,
    BoardController,
    BoardCategoryController,
    AzureSpeechController,
    SmartContractController,
    TxHashController
];
const adminControllers = [
    AppController,
    AdminUserController,
    FindController,
    GoogleController,
    BoardAdminController,
    SettingController,
    SmartContractController,
    TxHashController
];

const apiProviders = [
    {
        provide: APP_GUARD,
        useClass: ApiAuthGuard,
    },
    SettingRepository,
    SettingService,
    AppService,
    AuthService,

    UserService,
    UserRepository,
    UpdateUserService,

    AuthorityService,
    AuthorityEntityRepository,

    GoogleService,
    NaverService,
    KakaoService,

    IdvService, // 본인 인증
    AwsService,
    EmailService,

    PolicyService,
    PolicyRepository,

    BoardRepository,
    BoardService,
    BoardCategoryRepository,
    BoardCategoryService,

    AzureService,
    SmartContractService,

    TxHashRepository,
    TxHashService
];
const adminProviders = [
    {
        provide: APP_GUARD,
        useClass: AdminAuthGuard,
    },
    SettingRepository,
    SettingService,
    AppService,
    AuthService,

    UserService,
    UserRepository,
    UpdateUserService,

    AuthorityService,
    AuthorityEntityRepository,

    GoogleService,

    AwsService,
    EmailService,

    PolicyService,
    PolicyRepository,

    BoardRepository,
    BoardService,
    BoardCategoryRepository,
    BoardCategoryService,

    AzureService,
    SmartContractService,

    TxHashRepository,
    TxHashService
];

export default {
    admin: {
        controllers: adminControllers,
        providers: adminProviders,
    },
    api: {
        controllers: apiControllers,
        providers: apiProviders,
    },
};
