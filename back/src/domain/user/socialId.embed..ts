import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class SocialIdEmbed {
  @ApiProperty({ required: false, example: '', description: '패이스북 ID' })
  @Column({ length: 50, nullable: true, comment: '패이스북 ID' })
  facebookId: string;

  @ApiProperty({ required: false, example: '', description: '패이스북 이름' })
  @Column({ length: 50, nullable: true, comment: '패이스북 이름' })
  facebookName: string;

  @ApiProperty({ required: false, example: '', description: '구글 ID' })
  @Column({ length: 50, nullable: true, comment: '구글 ID' })
  googleId: string;

  @ApiProperty({ required: false, example: '', description: '구글 이름' })
  @Column({ length: 50, nullable: true, comment: '구글 이름' })
  googleName: string;

  @ApiProperty({ required: false, example: '', description: '카카오 ID' })
  @Column({ length: 50, nullable: true, comment: '카카오 ID' })
  kakaoId: string;

  @ApiProperty({ required: false, example: '', description: '카카오 이름' })
  @Column({ length: 50, nullable: true, comment: '카카오 이름' })
  kakaoName: string;

  @ApiProperty({ required: false, example: '', description: 'Naver ID' })
  @Column({ length: 50, nullable: true, comment: 'Naver ID' })
  naverId: string;

  @ApiProperty({ required: false, example: '', description: 'Naver 이름' })
  @Column({ length: 50, nullable: true, comment: 'Naver 이름' })
  naverName: string;

  @ApiProperty({ required: false, example: '', description: '애플 ID' })
  @Column({ length: 50, nullable: true, comment: '애플 ID' })
  appleId: string;

  @ApiProperty({ required: false, example: '', description: '애플 이름' })
  @Column({ length: 50, nullable: true, comment: '애플 이름' })
  appleName: string;
}
