import { DataSource, In, Raw } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createTimeRangeQuery } from '../../utils/paginate.utils';
import { BoardEntity } from './board.entity';
import { AbstractPageRepository } from '../abstract.page.repository';
import {
  generateSearchQuery,
  PageOptions,
  Pagination,
} from '../../service/page.service.interface';
import { BoardOptions } from '../../service/board/board.service';
import { isEmpty } from '../../utils/string.utils';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';

@Injectable()
export class BoardRepository extends AbstractPageRepository<BoardEntity> {
  constructor(
    dataSource: DataSource,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {
    super(dataSource, BoardEntity);
  }

  async page(
    options: PageOptions<BoardOptions>,
  ): Promise<Pagination<BoardEntity>> {
    let whereCondition: any = {
      createdTime: createTimeRangeQuery(options.startTime, options.endTime),
    };

    if (options.addOptions && options.addOptions.hide) {
      whereCondition = {
        ...whereCondition,
        hide: options.addOptions.hide,
      };
    }

    // ==== 조건(where) 설정
    // Query 설정
    if (!isEmpty(options.query)) {
      if (options.query.length < 2) {
        throw new HttpException(
          this.i18n.translate('error.SEARCH.QUERY_TWO', {
            lang: options.lang,
          }),
          HttpStatus.BAD_REQUEST,
        );
      }

      whereCondition = {
        ...whereCondition,
        // 검색
        title: Raw((alias) =>
          generateSearchQuery([
            {
              field: 'title',
              jsonField: options.lang.toLocaleLowerCase(),
              query: options.query,
            },
            {
              field: 'content',
              jsonField: options.lang.toLocaleLowerCase(),
              query: options.query,
            },
          ]),
        ),
      };
    }

    // 기타 옵션 설정
    if (options.addOptions) {
      if (options.addOptions.type) {
        whereCondition = {
          ...whereCondition,
          type: options.addOptions.type,
        };
      }

      if (
        options.addOptions.categoryIds &&
        options.addOptions.categoryIds.length > 0
      ) {
        whereCondition = {
          ...whereCondition,
          categories: { id: In(options.addOptions.categoryIds) },
        };
      }
    }

    let addSelectAndWhere: any = {
      where: whereCondition,
    };

    // select 필드 설정
    if (options.selectFields) {
      addSelectAndWhere = {
        ...addSelectAndWhere,
        select: options.selectFields,
      };
    }

    return super.pageQuery(
      options,
      addSelectAndWhere,
      ['categories'],
      await super.getJsonFields(BoardEntity),
    );
  }
}
