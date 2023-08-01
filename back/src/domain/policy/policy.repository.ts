import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { PolicyEntity, PolicyType } from './policy.entity';
import { createTimeRangeQuery, skipQuery } from '../../utils/paginate.utils';
import {
  Pagination,
  PaginationOptions,
} from '../../service/page.service.interface';

@Injectable()
export class PolicyRepository extends Repository<PolicyEntity> {
  constructor(private dataSource: DataSource) {
    super(PolicyEntity, dataSource.createEntityManager());
  }

  async getLatest(type: PolicyType, countryCode: string) {
    const queryRunner = this.dataSource.createQueryRunner('slave');
    try {
      console.log(type, 'type');
      return await this.findOne({
        where: {
          type,
          hide: false,
          countryCode,
        },
        order: { createdTime: 'DESC' },
      });
      // return await this.createQueryBuilder('entity')
      //   .where('entity.type = :type', { type })
      //   .where('entity.countryCode = :countryCode', { countryCode })
      //   .where('entity.del = :del', { del: false })
      //   .where('entity.hide = :hide', { hide: false })
      //   .orderBy('entity.effectiveDate', 'DESC')
      //   .limit(1)
      //   .setQueryRunner(queryRunner)
      //   .getOne();
    } finally {
      await queryRunner.release();
    }
  }

  // async getPreviousPolicies(
  //   type: PolicyType,
  //   lang: string,
  //   page: number,
  //   limit: number,
  // ) {
  //   const queryRunner = this.dataSource.createQueryRunner('slave');
  //   console.log('');
  //   try {
  //     const [results, total] = await this.createQueryBuilder('entity')
  //       .select('entity.effectiveDate')
  //       .where('entity.type = :type', { type })
  //       .andWhere('entity.lang = :lang', { lang })
  //       .andWhere('entity.del = :del', { del: false })
  //       .andWhere('entity.hide = :hide', { hide: false })
  //       .orderBy('entity.effectiveDate', 'DESC')
  //       .skip((page - 1) * limit)
  //       .take(limit)
  //       .getManyAndCount();
  //
  //     return {
  //       data: results,
  //       total,
  //       page,
  //       lastPage: Math.ceil(total / limit),
  //     };
  //   } finally {
  //     await queryRunner.release();
  //   }
  // }

  async page(
    options: PaginationOptions,
    type: PolicyType,
    countryCode: string,
  ): Promise<Pagination<PolicyEntity>> {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    console.log(new Date());
    const queryRunner = this.dataSource.createQueryRunner('slave');
    try {
      console.log(options, 'options');
      const { size, startTime, endTime } = options;
      const [results, total] = await this.findAndCount({
        // select: ['id', 'content', 'type', 'effectiveDate', 'createdTime'],
        where: {
          type,
          hide: false,
          countryCode,
          createdTime: createTimeRangeQuery(startTime, endTime),
        },
        take: size,
        skip: skipQuery(options),
        order: options.order || { createdTime: 'DESC' },
      });
      return new Pagination<PolicyEntity>({
        options,
        items: results,
        total,
      });
    } finally {
      await queryRunner.release();
    }
  }
}
