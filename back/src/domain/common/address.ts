import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class Address {
  @ApiProperty({
    example: '서울특별시 마포구 독막로9길 18',
    description: '주소1',
  })
  @Column({ nullable: true, length: 50, comment: '우편번호' })
  postalCode: string;

  @ApiProperty({
    example: '201호',
    description: '주소2 상세주소',
  })
  @Column({ nullable: true, comment: '주소1' })
  address1: string;

  @ApiProperty({
    example: '34152',
    description: '우편번호',
  })
  @Column({ nullable: true, comment: '주소2 (상세주소)' })
  address2: string;
}
