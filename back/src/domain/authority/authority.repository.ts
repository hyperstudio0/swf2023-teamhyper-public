import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AuthorityEntity } from './authority.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class AuthorityEntityRepository extends Repository<AuthorityEntity> {
  constructor(private dataSource: DataSource) {
    super(AuthorityEntity, dataSource.createEntityManager());
  }

  async createAuthority(authority: AuthorityEntity): Promise<AuthorityEntity> {
    return await this.save(authority);
  }

  async listByUserEmail(email: string) {
    return this.createQueryBuilder('authority')
      .innerJoinAndSelect('authority.user', 'user')
      .where('user.email = :email', { email })
      .getMany();
  }
}
