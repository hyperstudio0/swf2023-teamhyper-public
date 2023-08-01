import { ApiProperty } from '@nestjs/swagger';
import { PolicyEntity, PolicyType } from '../domain/policy/policy.entity';
import { Transform } from 'class-transformer';
import {
  Pagination,
  PaginationMetadata,
} from '../service/page.service.interface';
import * as moment from 'moment/moment';

export class PolicyDTO {
  constructor(policy: PolicyEntity) {
    this.id = policy.id;
    this.content = policy.content;
    this.effectiveDate = policy.effectiveDate;
    this.countryCode = policy.countryCode;
    this.type = policy.type;
  }

  @ApiProperty({ example: '', description: 'ID' })
  id: number;

  @ApiProperty({
    example: 'TERMS,PRIVACY_POLICY,MARKETING,LEAVE,LOCATION,CONTACT,ADULT',
    description: '유형',
  })
  type: PolicyType;

  @ApiProperty({ example: '', description: '내용' })
  content: string;

  @Transform(({ value }) => value && value.getTime())
  @ApiProperty({ example: '20230713', description: '시행일' })
  effectiveDate: Date | number;

  @ApiProperty({ example: 'KR', description: '국가' })
  countryCode: string;
}

export class PolicyPage extends Pagination<PolicyDTO> {
  @ApiProperty({ type: [PolicyDTO], description: '데이터' })
  public items: PolicyDTO[];

  @ApiProperty({ description: '페이지 메타 정보' })
  public metadata: PaginationMetadata;
}

export class PolicyVersion {
  constructor(entity: PolicyEntity) {
    this.id = entity.id;
    this.effectiveDate = entity.effectiveDate;
    if (this.effectiveDate)
      this.version = moment(this.effectiveDate).format('YYYY.MM.DD');
  }

  @ApiProperty({ type: Number, description: 'ID' })
  public id: number;

  @ApiProperty({ type: Date, description: '시행일' })
  public effectiveDate: Date;

  @ApiProperty({ type: String, description: '버전' })
  public version: string;
}
