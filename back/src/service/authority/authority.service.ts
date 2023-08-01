import { Injectable } from '@nestjs/common';
import {
  AuthorityEntity,
  AuthorityType,
} from '../../domain/authority/authority.entity';
import { AuthorityEntityRepository } from '../../domain/authority/authority.repository';

@Injectable()
export class AuthorityService {
  constructor(
    private readonly authorityEntityRepository: AuthorityEntityRepository,
  ) {}

  async initCreateAuthority(): Promise<boolean> {
    if (!(await this.getRole(AuthorityType.SUPER))) {
      await this.createRole(AuthorityType.SUPER);
    }
    if (!(await this.getRole(AuthorityType.ADMIN))) {
      await this.createRole(AuthorityType.ADMIN);
    }
    if (!(await this.getRole(AuthorityType.USER))) {
      await this.createRole(AuthorityType.USER);
    }
    return true;
  }

  async getRole(role: AuthorityType): Promise<AuthorityEntity | null> {
    return await this.authorityEntityRepository.findOneBy({ role });
  }

  async createRole(role: AuthorityType): Promise<AuthorityEntity> {
    const authority = new AuthorityEntity();
    authority.role = role;
    return await this.authorityEntityRepository.save(authority);
  }

  async listByUserEmail(email: string): Promise<AuthorityEntity[]> {
    return await this.authorityEntityRepository.listByUserEmail(email);
  }
}
