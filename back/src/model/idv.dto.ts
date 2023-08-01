import { ApiProperty } from '@nestjs/swagger';

export class IdvReadyResult {
  @ApiProperty({ example: '', description: 'ready 결과 코드' })
  code: string;

  @ApiProperty({ example: '', description: 'ready 결과 메시지' })
  message: string;

  @ApiProperty({ example: '', description: 'TID' })
  tid: string;
  constructor(code: string, message: string, tid: string) {
    this.code = code;
    this.message = message;
    this.tid = tid;
  }
}
