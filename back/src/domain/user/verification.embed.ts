import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { encryptTransformer } from '../../utils/encrypt.utils';

export class VerificationEmbed {
  // 이메일 인증
  @ApiProperty({ example: 'true', description: '이메일 인증' })
  @Column({
    name: 'vEmail',
    nullable: true,
    default: false,
    comment: '이메일 인증',
  })
  email: boolean;

  @Column({
    nullable: true,
    length: 5,
    comment: '이메일 인증 코드',
  })
  emailCode?: string;

  @Column({
    name: 'newEmail',
    nullable: true,
    comment: '변경할 이메일',
    transformer: encryptTransformer(),
  })
  newEmail?: string;

  @Column({
    nullable: true,
    comment: '이메일 인증 코드 만료시간',
  })
  expireEmailCode?: Date;

  // 휴대폰 인증
  @ApiProperty({ example: 'true', description: '모바일 인증' })
  @Column({
    name: 'vMobile',
    nullable: true,
    default: false,
    comment: '모바일 인증',
  })
  mobile: boolean;

  @Column({
    name: 'newMobile',
    nullable: true,
    comment: '모바일',
    transformer: encryptTransformer(),
  })
  newMobile?: string;

  @Column({
    nullable: true,
    length: 5,
    comment: '휴대폰번호 인증 코드',
  })
  mobileCode?: string;

  @Column({
    nullable: true,
    comment: '휴대폰번호 인증 코드 만료시간',
  })
  expireMobilCode?: Date;
}
