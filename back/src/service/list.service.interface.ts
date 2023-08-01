import { ApiProperty } from '@nestjs/swagger';
import { FindOptionsOrder } from 'typeorm/find-options/FindOptionsOrder';

export class Options {
  @ApiProperty({
    type: String,
    example: '',
    description: '검색어',
    required: false,
  })
  query?: string;

  @ApiProperty({
    type: Date,
    example: '',
    description: 'start 시간',
    required: false,
  })
  startTime?: Date;

  @ApiProperty({
    type: Date,
    example: '',
    description: 'end 시간',
    required: false,
  })
  endTime?: Date;

  @ApiProperty({
    type: Object,
    example: '',
    description: '순서',
    required: false,
  })
  order?: FindOptionsOrder<any>;

  @ApiProperty({ example: '', description: '언어' })
  lang: string;
}
export interface ListOptions<EntityOptions> extends Options {
  addOptions?: EntityOptions; // Entity 에 관련된 조건
  selectFields?: string[]; // 선택적 필드
}

export interface ListServiceInterface<Entity, ID, DTO, EntityOptions> {
  create(entity: Entity): Promise<Entity>;
  get(id: ID): Promise<Entity>;
  getDTO(id: ID, lang: string): Promise<DTO>;
  list(options: ListOptions<EntityOptions>): Promise<Entity[]>;
  listDTO(options: ListOptions<EntityOptions>): Promise<DTO[]>;
  update(entity: Entity): Promise<Entity>;
  delete(id: ID): Promise<boolean>;
}
