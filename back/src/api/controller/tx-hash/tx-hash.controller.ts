import {Controller, DefaultValuePipe, Get, Query, Req} from '@nestjs/common';
import {ApiHeader, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SmartContractService} from "../../../service/smart-contract/smart-contract.service";
import {TxHashService} from "../../../service/tx-hash/tx-hash.service";
import {Public} from "../api.auth.guard";
import {BoardDTO, BoardPage, BoardType} from "../../../model/board.dto";
import {endTimeOption, pageOption, queryOption, sizeOption, startTimeOption} from "../../../utils/paginate.utils";
import {I18nLang} from "nestjs-i18n";
import {Param} from "@nestjs/common/decorators/http/route-params.decorator";
import {TxHashDTO, TxHashPage} from "../../../model/smart-contract.dto";
import {Mode, Type} from "../../../domain/txhash/txhash.entity";

@ApiTags('트렌젝션 해시 API')
@Controller('api/v1/tx-hash')
export class TxHashController {

    constructor(private readonly txHashService: TxHashService) {
    }


    @Public()
    @Get()
    @ApiOperation({
        summary: '트렌젝션 해시  paging',
        operationId: 'txHashPage',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'TxHashPage',
        type: TxHashPage,
    })
    @ApiQuery(queryOption)
    @ApiQuery(startTimeOption)
    @ApiQuery(endTimeOption)
    @ApiQuery(sizeOption)
    @ApiQuery(pageOption)
    @ApiQuery({
        required: false,
        type: String,
        name: 'orderBy',
        description: '순서변경',
    })
    @ApiQuery({
        enum: Type,
        name: 'type',
        example: 'WHITELIST',
        description: '유형',
        required: false,
    })
    @ApiQuery({
        enum: Mode,
        name: 'mode',
        example: 'CREATE',
        description: '모드',
        required: false,
    })
    async page(
        @Req() request,
        @Query('query') query: string,
        @Query('startTime') startTime: Date,
        @Query('endTime') endTime: Date,
        @Query('size', new DefaultValuePipe(20)) size: number,
        @Query('page', new DefaultValuePipe(1)) page: number,
        @Query('type') type: Type,
        @Query('mode') mode: Mode,
        @I18nLang() lang: string,
    ): Promise<TxHashPage> {
        return this.txHashService.pageDTO({
            query,
            size,
            page,
            startTime,
            endTime,
            order: {
                top: 'DESC',
                createdTime: 'DESC',
            },
            lang,
            addOptions: {
                type,
                mode,
            },
        });
    }

    @Public()
    @Get('/:id')
    @ApiOperation({
        summary: '트렌젝션 해시 상세',
        operationId: 'txHashGet',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: 'TxHashDTO',
        type: TxHashDTO,
    })
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'ID of the TxHash',
    })
    async get(
        @Req() request,
        @Param('id') id: number,
        @I18nLang() lang: string,
    ): Promise<TxHashDTO> {
        return this.txHashService.getDTO(id, lang);
    }

}
