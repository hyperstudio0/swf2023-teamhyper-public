import { ApiProperty } from '@nestjs/swagger';

export class UpdateBoolean {
  @ApiProperty({ example: '', description: 'true/false' })
  value: boolean;
}

export class UpdateEmail {
  @ApiProperty({ example: '', description: '변경할 이메일 주소' })
  email: string;
}

export class UpdateNickname {
  @ApiProperty({ example: '', description: '변경할 닉네임' })
  nickname: string;
}

export class UpdatePassword {
  @ApiProperty({ example: '', description: '기존 비밀번호' })
  oldPassword: string;

  @ApiProperty({ example: '', description: '신규 비밀번호' })
  newPassword: string;

  @ApiProperty({ example: '', description: '신규 비밀번호 확인' })
  confirmPassword: string;
}

export class ConfirmCode {
  @ApiProperty({ example: '00000', description: '인증코드(5자)' })
  code: string;
}

export class CreatePassword {
  @ApiProperty({ example: '', description: '비밀번호' })
  password: string;
}

export class MarketingUpdatedBody {
  @ApiProperty({ example: '', description: '수신여부(true/false)' })
  value: boolean;

  @ApiProperty({ example: '', description: '수신시간' })
  date: Date;
}
