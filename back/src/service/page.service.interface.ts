import { ApiProperty } from '@nestjs/swagger';
import { FindOptionsOrder } from 'typeorm/find-options/FindOptionsOrder';

export class PaginationOptions {
  @ApiProperty({
    type: String,
    example: '',
    description: '검색어',
    required: false,
  })
  query?: string;

  @ApiProperty({ type: Number, example: '20', description: '페이지 사이즈' })
  size: number | 20;

  @ApiProperty({ type: Number, example: '1', description: '현재 페이지' })
  page: number | 1;

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

export class PaginationResult<DTO> {
  items: DTO[];
  options: PaginationOptions;
  total: number;
  next?: string;
  previous?: string;
}

export class PaginationMetadata {
  @ApiProperty({
    type: Number,
    example: '10',
    description: '현 페이지 데이터 조회 수',
  })
  public itemCount: number;

  @ApiProperty({ type: Number, example: '0', description: '데이터 총 수' })
  public total: number;

  @ApiProperty({ type: Number, example: '10', description: '페이지 사이즈' })
  public size: number;

  @ApiProperty({ type: Number, example: '1', description: '현재 페이지' })
  public currentPage: number;

  @ApiProperty({ type: Number, example: '0', description: '페이지 총 수' })
  public totalPages?: number;
}

export class Pagination<DTO> {
  @ApiProperty({ description: '데이터' })
  public items: DTO[];

  @ApiProperty({ description: '페이지 메타 정보' })
  public metadata: PaginationMetadata;

  constructor(paginationResult: PaginationResult<DTO>) {
    this.items = paginationResult.items;
    const metadata = new PaginationMetadata();
    if (paginationResult.options) {
      metadata.size = Number(paginationResult.options.size);
      metadata.currentPage = Number(paginationResult.options.page);
      metadata.totalPages = Math.ceil(
        paginationResult.total / paginationResult.options.size,
      );
    }
    metadata.itemCount = paginationResult.items.length;
    metadata.total = Number(paginationResult.total);
    this.metadata = metadata;
  }
}
export interface PageOptions<EntityOptions> extends PaginationOptions {
  addOptions?: EntityOptions; // Entity 에 관련된 조건
  selectFields?: string[]; // 선택적 필드
}

export interface PageServiceInterface<Entity, ID, DTO, EntityOptions> {
  create(entity: Entity, registrantId: number): Promise<Entity>;

  get(id: ID): Promise<Entity>;

  getDTO(id: ID, lang: string, isAdmin?: boolean | false): Promise<DTO>;
  page(options: PageOptions<EntityOptions>): Promise<Pagination<Entity>>;
  pageDTO(
    options: PageOptions<EntityOptions>,
    isAdmin?: boolean | false,
  ): Promise<Pagination<DTO>>;
  update(entity: Entity, modifierId: number): Promise<Entity>;

  delete(id: ID, deleterId: number): Promise<boolean>;
  deletes(id: ID[], deleterId: number): Promise<boolean>;
}

export type SearchCondition = {
  field: string;
  jsonField: string;
  query: string;
};

export function generateSearchQuery(search: SearchCondition[]): string {
  const queries = search.map(({ field, jsonField, query }) => {
    return `JSON_EXTRACT(${field}, '$.${jsonField}') LIKE '%${query}%'`;
  });
  return queries.join(' OR ');
}
