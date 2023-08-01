import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { BoardEntity } from '../domain/board/board.entity';
import { LocalizedDTO, localizedType, valueByLang } from './localized.dto';
import { BoardCategoryEntity } from '../domain/board/category.board.entity';
import {
  Pagination,
  PaginationMetadata,
} from '../service/page.service.interface';
import { CategoryDTO, DTOOption } from './default.dto';

export enum BoardType {
  NOTICE = 'NOTICE',
}

export class BoardCategoryDTO extends CategoryDTO {
  constructor(options: DTOOption<BoardCategoryEntity>) {
    super();
    this.id = options.entity.id;
    this.name = options.isAdmin
      ? options.entity.name
      : valueByLang(options.entity.name, options.lang);
    this.type = options.entity.type || undefined;
  }

  @ApiProperty({ example: '', description: '게시판 유형' })
  type: BoardType;
}

@ApiExtraModels(LocalizedDTO)
export class BoardDTO {
  constructor(options: DTOOption<BoardEntity>) {
    const board = options.entity;

    this.id = board.id;
    if (options.isAdmin) {
      this.title = board.title;
      if (!options.isThumb) this.content = board.content;
    } else {
      this.title = valueByLang(board.title, options.lang);
      if (!options.isThumb)
        this.content = valueByLang(board.content, options.lang);
    }
    this.top = board.top || false;
    this.pageView = board.pageView || 0;
    this.type = board.type || undefined;
    this.createdTime = board.createdTime;
    this.createdBy = board.createdBy;
    this.updatedTime = board.updatedTime;
    this.updatedBy = board.updatedBy;

    if (board.categories != undefined) {
      this.categories = board.categories.map((entity) => {
        return new BoardCategoryDTO({
          entity,
          lang: options.lang,
          isAdmin: options.isAdmin,
        });
      });
    }
  }

  @ApiProperty({ example: '', description: 'ID' })
  id: number;

  @ApiProperty({
    example: '',
    description: '카테고리',
    type: [BoardCategoryDTO],
  })
  categories: BoardCategoryDTO[];

  @ApiProperty({
    description: '제목',
    oneOf: localizedType(),
  })
  title: string | LocalizedDTO;

  @ApiProperty({
    description: '내용',
    oneOf: localizedType(),
  })
  content: string | LocalizedDTO;

  @ApiProperty({ example: '', description: '게시판 유형' })
  type: BoardType;

  @ApiProperty({ example: '', description: '상단 고정' })
  top: boolean;

  @ApiProperty({ example: '', description: '페이지 뷰' })
  pageView: number;

  @ApiProperty({ example: '', description: '등록일' })
  createdTime: Date;

  @ApiProperty({ example: '', description: '등록한 계정 ID' })
  createdBy: number;

  @ApiProperty({ example: '', description: '수정시간' })
  updatedTime: Date;

  @ApiProperty({ example: '', description: '수정한 계정 ID' })
  updatedBy: number;
}

export class BoardPage extends Pagination<BoardDTO> {
  @ApiProperty({ type: [BoardDTO], description: '데이터' })
  public items: BoardDTO[];

  @ApiProperty({ description: '페이지 메타 정보' })
  public metadata: PaginationMetadata;
}

export class ReqBoard {
  @ApiProperty({ type: LocalizedDTO, description: '제목' })
  title: LocalizedDTO;

  @ApiProperty({ type: LocalizedDTO, description: '내용' })
  content: LocalizedDTO;

  @ApiProperty({ type: [Number], description: '카테고리 ID' })
  categoryIds: number[];
}
