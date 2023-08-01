import { ApiProperty } from '@nestjs/swagger';

export class EmailFile {
  @ApiProperty({ example: '', description: '' })
  filename: string;

  @ApiProperty({ example: '', description: '' })
  data: Buffer;
}
