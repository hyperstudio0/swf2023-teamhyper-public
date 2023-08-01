import {Controller, Get, Post, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiBody, ApiConsumes, ApiHeader, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AzureService} from "../../../../service/azure/azure.service";
import {Public} from "../../api.auth.guard";
import {BoardDTO} from "../../../../model/board.dto";
import {Param} from "@nestjs/common/decorators/http/route-params.decorator";
import {I18nLang} from "nestjs-i18n";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileUploadDto} from "../../../../model/azure.speech.dto";

@ApiTags('애저 스피치')
@Controller('/api/v1/azure/speech')
export class AzureSpeechController {

    constructor(private readonly azureService: AzureService) {
    }

    @Public()
    @Get('/profile')
    @ApiOperation({
        summary: '애저 스피치 프로필',
        operationId: 'azureSpeechProfile',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiResponse({
        status: 200,
        description: '',
        type: String,
    })
    async profile(
        @Req() request,
        @I18nLang() lang: string,
    ): Promise<string> {
        return this.azureService.createProfile();
    }

    @Public()
    @Post('/enroll')
    @UseInterceptors(FileInterceptor('file'))
    @ApiOperation({
        summary: '애저 스피치 오디오 프로파일 등록',
        operationId: 'azureSpeechEnroll',
    })
    @ApiHeader({
        name: 'Accept-Language',
        description: 'ko-KR',
    })
    @ApiBody({
        description: '오디오 파일',
        type: FileUploadDto,
    })
    @ApiConsumes('multipart/form-data')
    @ApiResponse({
        status: 200,
        description: 'The enrollment has been successfully created',
        type: String,
    })
    async enroll(
        @Req() request,
        @I18nLang() lang: string,
        @UploadedFile() file
    ): Promise<string> {
        console.log(file, 'file');
        if (!file || !file.buffer) {
            throw new Error('File not found');
        }
        return this.azureService.enrollProfileAudio(file.buffer);
    }
}
