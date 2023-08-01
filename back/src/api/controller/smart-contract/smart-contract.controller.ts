import {Controller, Get, Req} from '@nestjs/common';
import {ApiHeader, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SmartContractService} from "../../../service/smart-contract/smart-contract.service";
import {Public} from "../api.auth.guard";
import {I18nLang} from "nestjs-i18n";
import {Count} from "../../../model/smart-contract.dto";
import {Any} from "typeorm";

@ApiTags('스마트 컨트랙트 API')
@Controller('api/v1/smart-contract')
export class SmartContractController {

    constructor(private readonly smartContractService: SmartContractService) {}


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

}
