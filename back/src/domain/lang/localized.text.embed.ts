import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class LocalizedTextEmbed {
  @ApiProperty({ required: false, example: '', description: '' })
  @Column({ length: 255, nullable: true, comment: '' })
  textKoKr: string; // 국문

  @ApiProperty({ required: false, example: '', description: '' })
  @Column({ length: 255, nullable: true, comment: '' })
  textEnUs: string; // 영문

  @ApiProperty({ required: false, example: '', description: '' })
  @Column({ length: 255, nullable: true, comment: '' })
  textZhCn: string; // 중문(간체)

  @ApiProperty({ required: false, example: '', description: '' })
  @Column({ length: 255, nullable: true, comment: '' })
  textZhTw: string; // 중문(번체)

  @ApiProperty({ required: false, example: '', description: '' })
  @Column({ length: 255, nullable: true, comment: '' })
  textJaJp: string; // 일문
}
