import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { LocalizedDTO } from '../model/localized.dto';

@Entity({
  synchronize: false, // 테이블 동기화 비활성화
})
export abstract class AbstractCategoryEntity extends AbstractEntity {
  @Column({ nullable: true, type: 'json' })
  name: LocalizedDTO;

  @Column({ nullable: false })
  orderBy: number;
}
