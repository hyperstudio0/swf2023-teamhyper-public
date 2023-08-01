import { DataSource, Raw, Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BoardCategoryEntity } from './category.board.entity';
import { BoardCategoryOptions } from '../../service/board-category/board-category.service';
import { ListOptions } from '../../service/list.service.interface';
import { createTimeRangeQuery } from '../../utils/paginate.utils';
import { isEmpty } from '../../utils/string.utils';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';

@Injectable()
export class BoardCategoryRepository extends Repository<BoardCategoryEntity> {
  constructor(
    private dataSource: DataSource,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {
    super(BoardCategoryEntity, dataSource.createEntityManager());
  }

  async list(
    options: ListOptions<BoardCategoryOptions>,
  ): Promise<BoardCategoryEntity[]> {
    const queryRunner = this.dataSource.createQueryRunner('slave');
    try {
      let whereCondition: any = {
        hide: false,
        createdTime: createTimeRangeQuery(options.startTime, options.endTime),
      };

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
          // 제목 검색
          name: Raw(
            (alias) =>
              `json_extract(${alias}, '$.${options.lang.toLocaleLowerCase()}') LIKE '%${
                options.query
              }%'`,
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

      return await this.find({
        order: options.order || { orderBy: 'ASC' },
        ...addSelectAndWhere,
      });
    } finally {
      await queryRunner.release();
    }
  }
}
