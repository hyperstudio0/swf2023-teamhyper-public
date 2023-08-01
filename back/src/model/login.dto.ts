import { ApiProperty } from '@nestjs/swagger';
import { GenderType, UserEntity } from '../domain/user/user.entity';
import { SocialIdEmbed } from '../domain/user/socialId.embed.';
import { TermsAgreeEmbed } from '../domain/user/termsAgree.embed';
import { VerificationEmbed } from '../domain/user/verification.embed';
import { isEmpty } from '../utils/string.utils';

export class ReqLogin {
  @ApiProperty({ example: 'super@super.com', description: '이메일 주소' })
  email: string;

  @ApiProperty({ example: 'super12345!', description: '비밀번호' })
  password: string;
}

export class ResLogin {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyQHN1cGVyLmNvbSIsInN1YiI6MiwiaWF0IjoxNjg2NDE5NDkwLCJleHAiOjE2ODY0MjMwOTB9.OI7uWv3xwA_EiA_MX8H-g6in7zAWtefKQXjxgrrJE7g',
    description: 'access_token',
  })
  access_token: string;
}

export class AuthedUser {
  @ApiProperty({ example: '1', description: 'User ID' })
  userId: number | undefined;

  @ApiProperty({ example: 'super@super.com', description: '이메일 주소' })
  email: string | undefined;

  @ApiProperty({ example: '[USER]', description: '권한' })
  role: string[] | undefined;
}

export class Profile {
  constructor(user: UserEntity) {
    if (user) {
      this.id = user.id;
      this.image =
        user.image ||
        'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg';
      this.email = user.email;
      this.nickname = user.nickname;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.fullName = user.fullName;
      this.mobile = user.mobile;
      this.verification = user.verification;
      this.authorities =
        user.authorities && user.authorities.map((authority) => authority.role);
      this.hasPassword = !isEmpty(user.password);
      this.socialId = user.socialId;
      this.termsAgree = user.termsAgree;
    }
  }

  @ApiProperty({ example: '1', description: 'User ID' })
  id: number;

  @ApiProperty({ example: '', description: '프로필이미지 URL' })
  image: string;

  @ApiProperty({ example: 'super@super.com', description: '이메일 주소' })
  email: string;

  @ApiProperty({ example: '별명', description: '닉네임(별명)' })
  nickname: string;

  @ApiProperty({ example: '길동', description: '이름' })
  firstName: string;

  @ApiProperty({ example: '홍', description: '성' })
  lastName: string;

  @ApiProperty({ example: '홍길동', description: '성명' })
  fullName: string;

  @ApiProperty({ example: '01041533582', description: '휴대폰번호' })
  mobile: string;

  @ApiProperty({ example: '[USER]', description: '권한' })
  authorities: string[];

  @ApiProperty({
    example: '인증 정보',
    description: '인증 정보(모바일, 이메일)',
  })
  verification: VerificationEmbed;

  @ApiProperty({ example: 'true', description: '패스워드 보유의 유/무' })
  hasPassword: boolean;

  @ApiProperty({ example: '', description: '소셜 로그인 정보' })
  socialId: SocialIdEmbed;

  @ApiProperty({ example: '', description: '약관 동의 정보' })
  termsAgree: TermsAgreeEmbed;
}

export class SuccessJoin {
  @ApiProperty({ example: 'XXXX', description: '어세스 토큰' })
  access_token: string;

  @ApiProperty({ example: '{}', description: '사용자 프로필' })
  user: Profile;
}

export class UserJoin {
  @ApiProperty({ example: '별명', description: '닉네임(별명)' })
  nickname: string;

  @ApiProperty({ example: '홍길동', description: '성명' })
  fullName: string;

  @ApiProperty({ example: '01041533582', description: '휴대폰번호' })
  mobile: string;

  @ApiProperty({ example: 'super@super.com', description: '이메일 주소' })
  email: string;

  @ApiProperty({
    example: 'super12345!',
    description: '비밀번호',
  })
  password: string;

  @ApiProperty({ example: 'KR', required: false, description: '국가 코드' })
  countryCode: string;

  @ApiProperty({ example: '{}', required: false, description: '약관 정보' })
  termsAgree: TermsAgreeEmbed;

  @ApiProperty({
    example: '{}',
    required: false,
    description: 'SNS 로그인 정보',
  })
  socialId: SocialIdEmbed;
}

export class ReqFindPwd {
  @ApiProperty({ example: 'super@super.com', description: '이메일 주소' })
  email: string;
}

// 본인인증 결과
export class IdvSuccess {
  @ApiProperty({ description: '결과 코드' })
  returnCode: string;

  @ApiProperty({ description: '결과 메세지' })
  returnMsg: string;

  @ApiProperty({ description: '거래 번호' })
  tid: string;

  @ApiProperty({ description: '본인인증 고유 키' })
  ci: string;

  @ApiProperty({ description: 'site 연계 정보' })
  di: string;

  @ApiProperty({ description: '가맹점 주문번호' })
  orderId: string;

  @ApiProperty({ description: '사용자 이름' })
  name: string;

  @ApiProperty({ description: '가맹점 고객ID' })
  userId: string;

  @ApiProperty({ description: '사용자 생년월일(ex: 20140101)' })
  dob: string;

  @ApiProperty({ description: '사용자 성별(1: 남자, 2: 여자)' })
  sex: string;

  @ApiProperty({
    required: false,
    description: '휴대폰번호 (수정할때 사용)',
  })
  mobile?: string;

  toGender(): GenderType {
    if (this.sex === '1') {
      return GenderType.MALE;
    } else if (this.sex === '2') {
      return GenderType.FEMALE;
    } else {
      throw new Error('Invalid sex value');
    }
  }
}

export class ReqLeave {
  @ApiProperty({ example: '', description: '탈퇴 사유' })
  message: string;

  @ApiProperty({ example: '', description: '탈퇴 상세 사유' })
  detailMessage: string;

  @ApiProperty({ example: 'super12345!', description: '비밀번호' })
  password: string;
}
