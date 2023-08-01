import {Body, Controller, Delete, Get, Post, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SmartContractService} from "../../../service/smart-contract/smart-contract.service";
import {Public} from "../api.auth.guard";
import {I18nLang} from "nestjs-i18n";
import {
    AuthBody,
    AuthResultBody,
    ContractResponse,
    Count,
    PostBlackListBody,
    PostWhiteList
} from "../../../model/smart-contract.dto";
import {Any} from "typeorm";
import {ReqBoard} from "../../../model/board.dto";
import {Param} from "@nestjs/common/decorators/http/route-params.decorator";
import {PolicyType} from "../../../domain/policy/policy.entity";

@ApiTags('스마트 컨트랙트 API')
@Controller('api/v1/smart-contract')
export class SmartContractController {

    constructor(private readonly smartContractService: SmartContractService) {
    }


    @Public()
    @Get("/address")
    @ApiOperation({
        summary: '스마트 컨트랙트 주소',
        operationId: 'scContractAddress',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'Address',
        type: String,
    })
    async contractAddress(
        @Req() request,
        @I18nLang() lang: string,
    ): Promise<string> {
        return this.smartContractService.contractAddress();
    }

    @Public()
    @Get("/abi")
    @ApiOperation({
        summary: '스마트 컨트랙트 주소',
        operationId: 'scAbi',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'Address',
        type: Any,
    })
    async abi(
        @Req() request,
        @I18nLang() lang: string,
    ): Promise<string> {
        return this.smartContractService.abi();
    }

    @Public()
    @Get()
    @ApiOperation({
        summary: 'Whitelist/Blacklist 수',
        operationId: 'scCount',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'Count',
        type: Count,
    })
    async count(
        @Req() request,
        @I18nLang() lang: string,
    ): Promise<Count> {
        return this.smartContractService.count();
    }

    @Public()
    @Post("/white-list")
    @ApiOperation({
        summary: 'Whitelist 등록',
        operationId: 'scPostWhiteList',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'TXHash',
        type: String,
    })
    @ApiBody({type: PostWhiteList, description: 'DID'})
    async postWhiteList(
        @Req() request,
        @Body() body: PostWhiteList,
        @I18nLang() lang: string,
    ): Promise<string> {
        return this.smartContractService.postWhiteList(body.did);
    }

    @Public()
    @Post("/black-list")
    @ApiOperation({
        summary: 'Blacklist 등록',
        operationId: 'scPostBlackList',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'TXHash',
        type: String,
    })
    @ApiBody({type: PostBlackListBody, description: 'Black Body'})
    async postBlackList(
        @Req() request,
        @Body() body: PostBlackListBody,
        @I18nLang() lang: string,
    ): Promise<string> {
        return this.smartContractService.postBlackList(body);
    }

    @Public()
    @Post("/auth")
    @ApiOperation({
        summary: 'Whitelist 인증',
        operationId: 'scAuthWhiteList',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'TXHash',
        type: String,
    })
    @ApiBody({type: AuthBody, description: '인증할 번호'})
    async authWhiteList(
        @Req() request,
        @Body() body: AuthBody,
        @I18nLang() lang: string,
    ): Promise<AuthResultBody> {
        // const isWhiteListed = await this.smartContractService.isWhiteListed(body.value);
        // const blackListed = await this.smartContractService.isBlackListed(body.value);
        return await this.smartContractService.auth(body.value)
    }

    @Public()
    @Delete("/white-list/:did")
    @ApiOperation({
        summary: 'Whitelist 삭제',
        operationId: 'scDeleteWhiteList',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'TXHash',
        type: String,
    })
    @ApiParam({
        name: 'did',
        type: String,
        description: 'DID',
    })
    async deleteWhiteList(
        @Req() request,
        @Param('did') did: string,
        @I18nLang() lang: string,
    ): Promise<string> {
        return this.smartContractService.deleteWhiteList(did);
    }

    @Public()
    @Delete("/black-list/:id")
    @ApiOperation({
        summary: 'Blacklist 삭제',
        operationId: 'scDeleteBlackList',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'TXHash',
        type: String,
    })
    @ApiParam({
        name: 'id',
        type: String,
        description: 'ID',
    })
    async deleteBlackList(
        @Req() request,
        @Param('id') id: string,
        @I18nLang() lang: string,
    ): Promise<string> {
        return this.smartContractService.deleteBlackList(id);
    }

}
