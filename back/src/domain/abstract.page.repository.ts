import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { skipQuery } from '../utils/paginate.utils';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import {
  Pagination,
  PaginationOptions,
} from '../service/page.service.interface';

@Injectable()
export abstract class AbstractPageRepository<
  Entity,
> extends Repository<Entity> {
  constructor(
    protected dataSource: DataSource,
    private entityClass: new () => Entity,
  ) {
    super(entityClass, dataSource.createEntityManager());
  }

  async getJsonFields(entityClass: new () => any): Promise<string[]> {
    const repository = this.dataSource.getRepository(entityClass);
    const metadata = repository.metadata;
    const jsonColumns = metadata.columns.filter(
      (column) => column.type === 'json',
    );
    return jsonColumns.map((column) => column.propertyName) || [];
  }

  prependAlias(alias: string, fields: any): any {
    if (typeof fields === 'string') {
      return `${alias}.${fields}`;
    }

    if (Array.isArray(fields)) {
      return fields.map((field) => `${alias}.${field}`);
    }

    if (typeof fields === 'object') {
      const newFields: any = {};
      for (const key in fields) {
        newFields[`${alias}.${key}`] = fields[key];
      }
      return newFields;
    }

    return fields;
  }

  async pageQuery(
    options: PaginationOptions,
    addSelectAndWhere: FindOneOptions<Entity>,
    relations: string[] = [],
    jsonFields: string[] = [],
  ): Promise<Pagination<Entity>> {
    const queryRunner = this.dataSource.createQueryRunner('slave');
    try {
      const queryBuilder = this.createQueryBuilder('entity');
      relations.forEach((relation) => {
        queryBuilder.leftJoinAndSelect(`entity.${relation}`, relation);
      });
      Object.entries(addSelectAndWhere).forEach(([key, value]) => {
        // 추상 클래스에서는 지정한 select 사용 불가
        // if (key === 'select') {
        //   queryBuilder.select(this.prependAlias('entity', value));
        // }
        if (key === 'where') {
          queryBuilder.where(value);
        }
      });

      if (options.order) {
        for (const [key, value] of Object.entries(options.order)) {
          if (typeof value === 'object') {
            for (const joinKey in value) {
              queryBuilder.orderBy(
                `${key}.${joinKey}`,
                value[joinKey].toUpperCase(),
              );
            }
          } else if (typeof value === 'string') {
            const orderBy = value.toUpperCase();
            if (jsonFields.includes(key)) {
              queryBuilder
                .addSelect(`JSON_EXTRACT(entity.${key}, '$.ko')`, `json_${key}`)
                .orderBy(`json_${key}`, orderBy as 'ASC' | 'DESC');
            } else {
              queryBuilder.orderBy(`entity.${key}`, orderBy as 'ASC' | 'DESC');
            }
          }
        }
      } else {
        queryBuilder.orderBy({ 'entity.id': 'DESC' });
      }
      queryBuilder.take(options.size).skip(skipQuery(options));
      const [results, total] = await queryBuilder.getManyAndCount();
      return new Pagination<Entity>({
        options,
        items: results,
        total,
      });
    } finally {
      await queryRunner.release();
    }
  }
}

// import { DataSource, Repository } from 'typeorm';
// import { Injectable } from '@nestjs/common';
// import { skipQuery } from '../utils/paginate.utils';
// import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
// import {
//   Pagination,
//   PaginationOptions,
// } from '../service/page.service.interface';
//
// @Injectable()
// export abstract class AbstractPageRepository<
//   Entity,
// > extends Repository<Entity> {
//   constructor(
//     protected dataSource: DataSource,
//     private entityClass: new () => Entity,
//   ) {
//     super(entityClass, dataSource.createEntityManager());
//   }
//
//   async pageQuery(
//     options: PaginationOptions,
//     addSelectAndWhere: FindOneOptions<Entity>,
//     relations: string[] = [],
//   ): Promise<Pagination<Entity>> {
//     const queryRunner = this.dataSource.createQueryRunner('slave');
//     console.log(options.order, 'options.order');
//     try {
//       const [results, total] = await this.findAndCount({
//         take: options.size,
//         skip: skipQuery(options),
//         relations: relations,
//         order: options.order || { createdTime: 'DESC' },
//         ...addSelectAndWhere,
//       });
//       return new Pagination<Entity>({
//         options,
//         items: results,
//         total,
//       });
//     } finally {
//       await queryRunner.release();
//     }
//   }
// }
// ===
