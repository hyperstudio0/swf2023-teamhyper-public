import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { Address } from '../common/address';
import { TermsAgreeEmbed } from './termsAgree.embed';
import { VerificationEmbed } from './verification.embed';
import { SocialIdEmbed } from './socialId.embed.';
import { LeaveMeta } from './leaveMeta.embed';
import { AuthorityEntity } from '../authority/authority.entity';
import { ApiProperty } from '@nestjs/swagger';
import { encrypt, encryptTransformer } from '../../utils/encrypt.utils';

export enum GenderType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

@Entity({
  name: 'User',
  synchronize: true,
  orderBy: {
    id: 'DESC',
    createdTime: 'DESC',
  },
})
export class UserEntity extends AbstractEntity {
  @ApiProperty({ example: 'test@test.com', description: '이메일' })
  @Column({
    unique: true,
    comment: '이메일',
    transformer: encryptTransformer(),
  })
  email: string;

  @ApiProperty({ example: '닉네임', description: '닉네임' })
  @Column({
    comment: '닉네임',
    default: encrypt('none'),
    transformer: encryptTransformer(),
  })
  nickname: string;

  @ApiProperty({ example: '길동', description: '이름' })
  @Column({ comment: '이름', transformer: encryptTransformer() })
  firstName: string;

  @ApiProperty({ example: '홍', description: '성' })
  @Column({ comment: '성', transformer: encryptTransformer() })
  lastName: string;

  @ApiProperty({ example: '홍길동', description: '성명' })
  @Column({ comment: '홍길동', transformer: encryptTransformer() })
  fullName: string;

  @ApiProperty({ example: 'KR', description: '국가코드' })
  @Column({ comment: '국가코드', default: 'KR' })
  countryCode: string;

  @ApiProperty({ example: '01012341234', description: '휴대폰번호' })
  @Column({ comment: '모바일', transformer: encryptTransformer() })
  mobile: string;

  @ApiProperty()
  @Column((type) => Address, { prefix: false }) // Embeddable 클래스를 사용하여 주소 필드 정의
  address: Address;

  @ApiProperty({ example: 'dasklje123', description: '비밀번호' })
  @Column({ comment: '비밀번호' })
  password: string;

  @ApiProperty({ required: false, example: '', description: '이미지 URL' })
  @Column({ nullable: true, length: 100, comment: '프로필 이미지 URL' })
  image: string;

  @ApiProperty({ required: false, example: 'MALE', description: '성별' })
  @Column({
    nullable: true,
    type: 'enum',
    enum: GenderType,
    comment: '성별',
  })
  gender: GenderType;

  @ApiProperty({
    required: false,
    example: '19870123',
    description: '생년월일',
  })
  @Column({
    nullable: true,
    comment: '생년월일 (YYYYMMDD)',
    length: 100,
    transformer: encryptTransformer(),
  })
  birth: string;

  @ApiProperty()
  @Column((type) => TermsAgreeEmbed, { prefix: false })
  termsAgree: TermsAgreeEmbed;

  @ApiProperty()
  @Column((type) => VerificationEmbed, { prefix: false })
  verification: VerificationEmbed;

  @ApiProperty()
  @Column((type) => SocialIdEmbed, { prefix: false })
  socialId: SocialIdEmbed;

  @Column((type) => LeaveMeta, { prefix: false })
  leaveMeta: LeaveMeta;

  @ManyToMany(() => AuthorityEntity) // 다대다 관계 설정
  @JoinTable({ name: 'User_Authority' }) // 중간 테이블을 정의하기 위해 @JoinTable() 사용
  authorities: AuthorityEntity[];

  @Column({ nullable: false, comment: '차단 사용자', default: false })
  blocked: boolean;
}
