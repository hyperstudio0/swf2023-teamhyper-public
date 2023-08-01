import { Entity, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { UserEntity } from '../user/user.entity';

export enum AuthorityType {
  SUPER = 'SUPER',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Entity({
  name: 'Authority',
  synchronize: true,
})
export class AuthorityEntity extends AbstractEntity {
  @Column({ type: 'enum', enum: AuthorityType, comment: '이메일' })
  role: AuthorityType;

  @ManyToOne(() => UserEntity, (user) => user.authorities)
  user: UserEntity;
}
