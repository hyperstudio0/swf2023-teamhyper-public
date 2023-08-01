import { Controller, Get, Query, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PolicyService } from '../../../service/policy/policy.service';
import { I18nLang } from 'nestjs-i18n';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { instanceToPlain } from 'class-transformer';
import { PolicyDTO, PolicyVersion } from '../../../model/policy.dto';
import { PolicyType } from '../../../domain/policy/policy.entity';
import { Public } from '../api.auth.guard';

@ApiTags('이용약관 및 개인정보처리 문서')
@Controller('api/v1/policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Public()
  @Get('latest/:type')
  @ApiOperation({
    summary: '시행중인 약관 정보',
    operationId: 'policyLatest',
  })
  @ApiResponse({
    status: 200,
    description: 'Policy',
    type: PolicyDTO,
  })
  @ApiParam({
    name: 'type',
    enum: PolicyType,
    description: 'Type of the policy',
  })
  @ApiQuery({
    name: 'countryCode',
    example: 'KR',
    description: '국가 코드',
  })
  async latest(
    @Req() request,
    @Param('type') type: PolicyType,
    @I18nLang()
    lang: string,
    @Query('countryCode') countryCode: string,
  ): Promise<Record<string, PolicyDTO>> {
    return instanceToPlain<PolicyDTO>(
      await this.policyService.getLatest(type, countryCode),
    );
  }

  @Public()
  @Get('/:id')
  @ApiOperation({
    summary: '현 시행중인 약관 정보',
    operationId: 'policyGet',
  })
  @ApiResponse({
    status: 200,
    description: 'Policy',
    type: PolicyDTO,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the policy',
  })
  async get(
    @Req() request,
    @Param('id') id: number,
    @I18nLang() lang: string,
  ): Promise<PolicyDTO> {
    return this.policyService.get(id);
  }

  @Public()
  @Get('versions/:type')
  @ApiOperation({
    summary: '이전 버전',
    operationId: 'policyVersions',
  })
  @ApiParam({
    name: 'type',
    enum: PolicyType,
    description: 'Type of the policy',
  })
  @ApiResponse({
    status: 200,
    description: 'Policy Version',
    type: [PolicyVersion],
  })
  async versions(
    @Req() request,
    @Param('type') type: PolicyType,
    @I18nLang() lang: string,
  ): Promise<PolicyVersion[]> {
    return this.policyService.versions(type);
  }
}
