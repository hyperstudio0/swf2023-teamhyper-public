import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import {
  ReferenceObject,
  SchemaObject,
} from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export function localizedType(): (SchemaObject | ReferenceObject)[] {
  return [{ type: 'string' }, { $ref: getSchemaPath(LocalizedDTO) }];
}

export class LocalizedDTO {
  @ApiProperty({ description: '한국어' })
  ko?: string;
  @ApiProperty({ description: '영어' })
  en?: string;
  @ApiProperty({ description: '중국어 간체' })
  zhCn?: string;
  @ApiProperty({ description: '중국어 번체' })
  zhTw?: string;
  @ApiProperty({ description: '일본어' })
  ja?: string;
}

export function valueByLang(value: LocalizedDTO, lang: string): string {
  if (value && lang)
    switch (lang) {
      case 'ko':
        return value.ko;
      case 'en':
        return value.en;
      case 'zh-cn':
        return value.zhCn;
      case 'zh-tw':
        return value.zhTw;
      case 'ja':
        return value.ja;
      default:
        return undefined;
    }
  return undefined;
}
