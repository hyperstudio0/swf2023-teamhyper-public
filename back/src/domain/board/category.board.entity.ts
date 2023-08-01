import { Column, Entity, ManyToMany } from 'typeorm';
import { AbstractCategoryEntity } from '../abstract.category.entity';
import { BoardEntity } from './board.entity';
import { BoardType } from '../../model/board.dto';

@Entity({
  name: 'BoardCategory',
  synchronize: true,
})
export class BoardCategoryEntity extends AbstractCategoryEntity {
  @Column({ type: 'enum', enum: BoardType, comment: '게시판 유형' })
  type: BoardType;

  @ManyToMany(() => BoardEntity, (board) => board.categories)
  boards: BoardEntity[];
}
