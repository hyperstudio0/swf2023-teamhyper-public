import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async existByEmail(email: string) {
    return this.exist({
      where: { email },
    });
  }

  async existByMobile(mobile: string) {
    return this.exist({
      where: { mobile },
    });
  }

  async get(id: number) {
    return this.findOne({
      where: { id },
      relations: ['authorities'],
    });
  }

  async getByEmail(email: string) {
    return this.findOne({
      where: { email },
      relations: ['authorities'],
    });
  }

  async getByGoogleId(googleId: string) {
    return this.findOne({
      where: {
        socialId: {
          googleId,
        },
      },
      relations: ['authorities'],
    });
  }

  async getByKakaoId(kakaoId: string) {
    return this.findOne({
      where: {
        socialId: {
          kakaoId,
        },
      },
      relations: ['authorities'],
    });
  }

  async getByNaverId(naverId: string) {
    return this.findOne({
      where: {
        socialId: {
          naverId,
        },
      },
      relations: ['authorities'],
    });
  }
}
