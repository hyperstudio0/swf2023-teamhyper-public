import { ApiProperty } from '@nestjs/swagger';
import { LocalizedDTO, localizedType } from './localized.dto';

export class KeyMessage {
  @ApiProperty({ example: '', description: 'key' })
  key: string;
  @ApiProperty({ example: '', description: 'value' })
  message: string;
}

export class KoreanName {
  @ApiProperty({ example: '', description: '홍' })
  lastName: string;
  @ApiProperty({ example: '', description: '길동' })
  firstName: string;
}

export class DTOOption<Entity> {
  /**
   * Entity 객체 유형
   * @example ""
   */
  entity: Entity;
  /**
   * 언어 ko, en, zhCN, zhTW, ja
   * @example ""
   */
  lang?: string;
  /**
   * 관리자 모드 시, 다국어 모두 노출
   * @example ""
   */
  isAdmin?: boolean | false;
  /**
   * 썸네일 데이터 (큰용량 필드는 제거)
   * @example ""
   */
  isThumb?: boolean | true;
}

export class CategoryDTO {
  @ApiProperty({ example: '', description: 'ID' })
  id: number;

  @ApiProperty({
    description: '카테고리 명',
    oneOf: localizedType(),
  })
  name: string | LocalizedDTO;
}
