import { ApiProperty } from '@nestjs/swagger';

export class ResResult {
  @ApiProperty({ example: 'true', description: '결과 성공 여부' })
  result: boolean;

  @ApiProperty({
    example: '성공하였습니다./실패하였습니다.',
    description: '결과 메시지',
  })
  message: string;

  constructor(result = true, message?: string) {
    this.result = result;
    this.message = message ?? (result ? '성공하였습니다.' : '실패하였습니다.');
  }
}
