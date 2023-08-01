import { ApiProperty } from '@nestjs/swagger';
import { KeyMessage } from './default.dto';

export const SNSType: { [type: string]: KeyMessage } = {
  FACEBOOK: {
    key: 'FACEBOOK',
    message: '페이스북',
  },
  GOOGLE: {
    key: 'GOOGLE',
    message: '구글',
  },
  NAVER: {
    key: 'NAVER',
    message: '네이버',
  },
  KAKAO: {
    key: 'KAKAO',
    message: '카카오',
  },
  APPLE: {
    key: 'APPLE',
    message: '애플',
  },
  INSTAGRAM: {
    key: 'INSTAGRAM',
    message: 'Instagram',
  },
};

export const SNSStatus: { [status: string]: KeyMessage } = {
  CONNECT: {
    key: 'CONNECT',
    message:
      'SNS 와 사용자계정 연동, SNS ID(고유키)로 연동된 계정이 존재하지 않고, SNS 정보와 동일한 이메일(계정)이 존재한다. -> SNS 연동후 로그인',
  },
  LINKED: {
    key: 'LINKED',
    message:
      '이미 연동되어었음, SNS ID(고유키)로 연동되어 있는 계정이 있다. -> 로그인',
  },
  LEAVED_ACCOUNT: {
    key: 'LEAVED_ACCOUNT',
    message:
      '탈퇴한 계정, SNS ID(고유키)로 연동된 계정이 존재하지 않고, SNS 정보와 동일한 이메일(계정)이 존재하지만 탈퇴한 계정이다. -> 로그인화면에서 로그인 실패사유 안내(팝업, 텍스트 등 으로)',
  },
  NOT_MATCH_SNS: {
    key: 'NOT_MATCH_SNS',
    message:
      'SNS ID(고유키) 불일치, SNS ID(고유키)로 연동된 계정이 존재하지 않고, SNS 정보와 동일한 이메일(계정)이 존재하지만 계정에 등록된 SNS ID와 SNS 로그인한 SNS ID가 일치 하지 않는다. -> 로그인 화면 또는 비번찾기 화면 에서 로그인 실패 사유 안내(팝업, 텍스트 등 으로)',
  },
  NOT_EXISTED_ACCOUNT: {
    key: 'NOT_EXISTED_ACCOUNT',
    message:
      '존재하지 않는 계정입니다. SNS ID(고유키)로 연동된 계정이 존재하지 않고, SNS 정보와 동일한 이메일(계정)이 존재하지 않는다. -> 회원가입',
  },
  NOT_PROVIDED_EMAIL: {
    key: 'NOT_PROVIDED_EMAIL',
    message:
      '제공되지 않은 이메일입니다. SNS ID(고유키)로 연동된 계정이 존재하지 않고, SNS 에서 이메일을 제공하지 않았다. -> 회원가입',
  },
};

export class AccessTokenResponse {
  // 해당 인터페이스는 반환되는 응답의 구조에 따라 수정해야 합니다.
  // 예시로는 필요한 프로퍼티들을 포함했습니다.
  @ApiProperty({ example: '', description: 'Access Token' })
  access_token: string;

  @ApiProperty({ example: '', description: '토큰 만료 시간(초)' })
  expires_in: number;
}

export class SNSResBody {
  @ApiProperty({ example: '', description: '' })
  status: KeyMessage;

  @ApiProperty({ example: '', description: '' })
  access_token: string;

  @ApiProperty({ example: '', description: '' })
  google_access_token: string;

  @ApiProperty({ example: '', description: '' })
  redirectUri: string;

  @ApiProperty({ example: '', description: '' })
  snsType: KeyMessage;

  @ApiProperty({ example: '', description: '' })
  id: string;

  @ApiProperty({ example: '', description: '' })
  name: string;

  @ApiProperty({ example: '', description: '' })
  nickname: string;

  @ApiProperty({ example: '', description: '' })
  email: string;

  @ApiProperty({ example: '', description: '' })
  image: string;

  @ApiProperty({ example: '', description: '' })
  verifiedEmail: boolean;

  @ApiProperty({ example: '', description: '' })
  birth: string;

  @ApiProperty({ example: '', description: '' })
  result: boolean;
}

export class SNSReqBody {
  @ApiProperty({ required: false, example: '', description: 'sns 유형' })
  snsType?: KeyMessage | undefined; // sns 유형

  @ApiProperty({ example: '', description: '코드' })
  code: string;

  @ApiProperty({ example: '', description: '리다이렉트 URI' })
  redirectUri: string;

  @ApiProperty({ required: false, example: '', description: 'state' })
  state?: string | undefined;

  @ApiProperty({ required: false, example: '', description: 'assess token' })
  idToken?: string | undefined;
}

export class KakaoProfile {
  @ApiProperty({ example: '', description: '' })
  nickname: string;

  @ApiProperty({ example: '', description: '' })
  profile_image: string;

  @ApiProperty({ example: '', description: '' })
  thumbnail_image: string;
}

export class KakaoAccount {
  @ApiProperty({ example: '', description: '' })
  profile_nickname_needs_agreement: boolean;
  @ApiProperty({ example: '', description: '' })
  profile_image_needs_agreement: boolean;

  @ApiProperty({ example: '', description: '' })
  has_email: boolean;

  @ApiProperty({ example: '', description: '' })
  email_needs_agreement: boolean;

  @ApiProperty({ example: '', description: '' })
  is_email_valid: boolean;

  @ApiProperty({ example: '', description: '' })
  is_email_verified: boolean;

  @ApiProperty({ example: '', description: '' })
  email: string;

  @ApiProperty({ example: '', description: '' })
  has_age_range: boolean;

  @ApiProperty({ example: '', description: '' })
  age_range_needs_agreement: boolean;

  @ApiProperty({ example: '', description: '' })
  age_range: string;

  @ApiProperty({ example: '', description: '' })
  has_birthday: boolean;

  @ApiProperty({ example: '', description: '' })
  birthday_needs_agreement: boolean;

  @ApiProperty({ example: '', description: '' })
  birthday: string;

  @ApiProperty({ example: '', description: '' })
  birthday_type: string;

  @ApiProperty({ example: '', description: '' })
  has_gender: boolean;

  @ApiProperty({ example: '', description: '' })
  gender_needs_agreement: boolean;

  @ApiProperty({ example: '', description: '' })
  gender: string;
}

export class Kakao {
  @ApiProperty({ example: '', description: '' })
  id: string;

  @ApiProperty({ example: '', description: '' })
  connected_at: string;

  @ApiProperty({ example: '', description: '' })
  kakao_account?: KakaoAccount;

  @ApiProperty({ example: '', description: '' })
  profile?: KakaoProfile;
}

export class NaverAccount {
  @ApiProperty({ example: '', description: '' })
  id: string;

  @ApiProperty({ example: '', description: '' })
  mobile: string;

  @ApiProperty({ example: '', description: '' })
  mobile_e164: string;

  @ApiProperty({ example: '', description: '' })
  name: string;

  @ApiProperty({ example: '', description: '' })
  nickname: string;

  @ApiProperty({ example: '', description: '' })
  profile_image: string;

  @ApiProperty({ example: '', description: '' })
  email: string;

  @ApiProperty({ example: '', description: '' })
  gender: string;

  @ApiProperty({ example: '', description: '' })
  birthday: string;

  @ApiProperty({ example: '', description: '' })
  birthyear: string;
}

export class Naver {
  @ApiProperty({ example: '00', description: '결과 코드' })
  resultcode: string;
  @ApiProperty({ example: 'success', description: '결과 메시지' })
  message: string;
  @ApiProperty({ example: '{}', description: '네이버 회원 정보' })
  response: NaverAccount;
}

export class GooglePojo {
  @ApiProperty({ example: '', description: '' })
  id: string;

  @ApiProperty({ example: '', description: '' })
  email: string;

  @ApiProperty({ example: '', description: '' })
  verified_email: boolean;

  @ApiProperty({ example: '', description: '' })
  name: string;

  @ApiProperty({ example: '', description: '' })
  given_name: string;

  @ApiProperty({ example: '', description: '' })
  family_name: string;

  @ApiProperty({ example: '', description: '' })
  link: string;

  @ApiProperty({ example: '', description: '' })
  picture: string;

  @ApiProperty({ example: '', description: '' })
  accessToken: string;
}

export class SNSConnect {
  @ApiProperty({ example: '', description: 'SNS Key' })
  key: string;

  @ApiProperty({ required: false, example: '', description: 'SNS Key' })
  nickname?: string;

  @ApiProperty({ example: 'FACEBOOK,', description: 'SNS Key' })
  email: string;

  @ApiProperty({ example: 'FACEBOOK,', description: 'SNS Key' })
  password: string;
}
