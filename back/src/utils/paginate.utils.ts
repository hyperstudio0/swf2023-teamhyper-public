import { FindOperator } from 'typeorm/find-options/FindOperator';
import { Connection, Raw } from 'typeorm';
import { ApiQueryOptions } from '@nestjs/swagger/dist/decorators/api-query.decorator';
import { PaginationOptions } from '../service/page.service.interface';

export function skipQuery(options: PaginationOptions) {
  return options.size * (options.page - 1);
}
export function createTimeRangeQuery(
  startTime?: Date,
  endTime?: Date,
): FindOperator<Date> {
  return Raw(
    (alias) => {
      if (startTime !== undefined && endTime !== undefined) {
        // console.log(`${alias} >= :startTime AND ${alias} <= :endTime`);
        return `${alias} >= :startTime AND ${alias} <= :endTime`;
      } else if (startTime !== undefined) {
        // console.log(`${alias} >= :startTime`);
        return `${alias} >= :startTime`;
      } else if (endTime !== undefined) {
        // console.log(`${alias} <= :endTime`);
        return `${alias} <= :endTime`;
      } else {
        return '1=1';
      }
    },
    {
      startTime,
      endTime,
    },
  );
}

export const queryOption: ApiQueryOptions = {
  name: 'query',
  example: '',
  required: false,
  type: String,
  description: '검색어',
};

export const startTimeOption: ApiQueryOptions = {
  name: 'startTime',
  example: new Date(),
  required: false,
  type: Date,
  description: '',
};

export const endTimeOption: ApiQueryOptions = {
  name: 'endTime',
  example: new Date(),
  required: false,
  type: Date,
  description: '',
};

export const sizeOption: ApiQueryOptions = {
  name: 'size',
  example: 20,
  required: false,
  type: Number,
  description: '한 페이지에 표시할 레코드의 개수',
};

export const pageOption: ApiQueryOptions = {
  name: 'page',
  example: 1,
  required: false,
  type: Number,
  description: '현재 페이지 번호 (1부터 시작)',
};

export function transSortToRaw(
  fields: string[],
  sortObject: object,
  lang: string,
): object {
  const result: object = sortObject;

  for (const [key, value] of Object.entries(sortObject)) {
    if (typeof value === 'string' && fields.includes(key)) {
      result[key] = (alias: string) => {
        return Raw(`json_extract(${alias}, '$.${lang}') ASC`);
      };
    }
  }
  result['id'] = 'desc';
  return result;
}
