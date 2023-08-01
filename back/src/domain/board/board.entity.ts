import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BoardDTO, BoardType } from '../../model/board.dto';
import { LocalizedDTO } from '../../model/localized.dto';
import { BoardCategoryEntity } from './category.board.entity';
import {
  Pagination,
  PaginationMetadata,
} from '../../service/page.service.interface';

@Entity({
  name: 'Board',
  synchronize: true,
})
export class BoardEntity extends AbstractEntity {
  @Column({ type: 'enum', enum: BoardType, comment: '게시판 유형' })
  type: BoardType;

  @Column({ nullable: true })
  thumbnail: string | undefined;

  @Column({ nullable: true, type: 'json' })
  title: LocalizedDTO;

  @Column({ nullable: true, type: 'json' })
  content: LocalizedDTO;

  @Column({ default: false })
  top: boolean | false;

  @Column({ default: 0, zerofill: true })
  pageView: number | 0;

  @ManyToMany(() => BoardCategoryEntity)
  @JoinTable({
    name: 'BoardToCategory', // 중간 테이블의 이름을 직접 지정
    joinColumn: { name: 'idBoard', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'idCategory', referencedColumnName: 'id' },
  })
  categories: BoardCategoryEntity[];
}

export class BoardPage extends Pagination<BoardDTO> {
  @ApiProperty({ type: [BoardDTO], description: '데이터' })
  public items: BoardDTO[];

  @ApiProperty({ description: '페이지 메타 정보' })
  public metadata: PaginationMetadata;
}
