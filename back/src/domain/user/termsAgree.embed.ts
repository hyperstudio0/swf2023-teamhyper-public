import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class TermsAgreeEmbed {
  @ApiProperty({ example: 'true', description: '서비스 이용약관 동의 (필수)' })
  @Column({ default: false, comment: '서비스 이용약관 동의 (필수)' })
  taService: boolean;

  @ApiProperty({
    example: 'true',
    description: '개인정보 수집이용 동의 (필수)',
  })
  @Column({ default: false, comment: '개인정보 수집이용 동의 (필수)' })
  taPrivacy: boolean;

  @ApiProperty({
    required: false,
    example: 'false',
    description: '본인은 만 19세 이상입니다. (선택)',
  })
  @Column({ default: false, comment: '본인은 만 19세 이상입니다. (선택)' })
  taAdult: boolean;

  @ApiProperty({
    required: false,
    example: 'false',
    description: '전자금융거래 이용약관 동의 (필수)',
  })
  @Column({ default: false, comment: '전자금융거래 이용약관 동의 (필수)' })
  taEft: boolean;

  @ApiProperty({
    required: false,
    example: 'false',
    description: '위치정보서비스 및 위치기반서비스 이용약관 (필수)',
  })
  @Column({
    default: false,
    comment: '위치정보서비스 및 위치기반서비스 이용약관 (필수)',
  })
  taLocation: boolean;

  @ApiProperty({
    example: 'false',
    description: '마케팅 활용 항목 (이메일, 문자, 앱푸시, 카카오톡) (선택)',
  })
  @Column({
    default: false,
    comment: '마케팅 활용 항목 (이메일, 문자, 카카오톡) (선택)',
  })
  taMarketing: boolean;

  @ApiProperty({
    required: false,
    example: 'false',
    description: '문자 발송 수신 동의 (선택)',
  })
  @Column({ default: false, comment: '문자 발송 수신 동의 (선택)' })
  smsRcv: boolean;

  @Column({ nullable: true, comment: '문자 발송 변경 시간 (선택)' })
  smsRcvTime: Date;

  @ApiProperty({
    required: false,
    example: 'false',
    description: '이메일 발송 수신 동의 (선택)',
  })
  @Column({ default: false, comment: '이메일 발송 수신 동의 (선택)' })
  emailRcv: boolean;

  @Column({ nullable: true, comment: '이메일 발송 변경 시간 (선택)' })
  emailRcvTime: Date;

  @ApiProperty({
    required: false,
    example: 'false',
    description: '앱푸시 발송 수신 동의 (선택)',
  })
  @Column({ default: false, comment: '앱푸시 발송 수신 동의 (선택)' })
  pushRcv: boolean;

  @Column({ nullable: true, comment: '앱푸시 발송 변경 시간 (선택)' })
  pushRcvTime: Date;

  @ApiProperty({
    required: false,
    example: 'false',
    description: '카카오 발송 수신 동의 (선택)',
  })
  @Column({ default: false, comment: '카카오 발송 수신 동의 (선택)' })
  kakaoRcv: boolean;

  @Column({ nullable: true, comment: '카카오 발송 변경 시간 (선택)' })
  kakaoRcvTime: Date;
}
