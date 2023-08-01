import { Injectable } from '@nestjs/common';
import { BoardCategoryRepository } from '../../domain/board/category.board.repository';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { ListOptions, ListServiceInterface } from '../list.service.interface';
import { BoardCategoryEntity } from '../../domain/board/category.board.entity';
import { BoardCategoryDTO, BoardType } from '../../model/board.dto';

export interface BoardCategoryOptions {
  type?: BoardType;
}
@Injectable()
export class BoardCategoryService
  implements
    ListServiceInterface<
      BoardCategoryEntity,
      number,
      BoardCategoryDTO,
      BoardCategoryOptions
    >
{
  constructor(
    private readonly repository: BoardCategoryRepository,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async create(entity: BoardCategoryEntity): Promise<BoardCategoryEntity> {
    return await this.repository.save(entity);
  }

  async delete(id: number): Promise<boolean> {
    if (
      !this.repository.exist({
        where: {
          id,
        },
      })
    ) {
      throw new Error('Not has id');
    }
    try {
      await this.repository.softDelete(id);
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }

  async get(id: number): Promise<BoardCategoryEntity> {
    return await this.repository.findOneBy({ id });
  }

  async getDTO(id: number, lang: string): Promise<BoardCategoryDTO> {
    const entity = await this.repository.findOneBy({ id });
    return new BoardCategoryDTO({ entity, lang });
  }

  async list(
    options: ListOptions<BoardCategoryOptions>,
  ): Promise<BoardCategoryEntity[]> {
    return await this.repository.list(options);
  }

  async listDTO(
    options: ListOptions<BoardCategoryOptions>,
    isAdmin?: boolean | false,
  ): Promise<BoardCategoryDTO[]> {
    return (await this.list(options)).map(
      (entity) => new BoardCategoryDTO({ entity, lang: options.lang, isAdmin }),
    );
  }

  async update(entity: BoardCategoryEntity): Promise<BoardCategoryEntity> {
    if (!this.repository.hasId(entity)) {
      throw new Error('Not has id');
    }
    return await this.repository.save(entity);
  }

  async initCreate(): Promise<boolean> {
    const list = await this.list({ lang: 'ko' });

    if (list.length === 0) {
      for (let i = 0; i < 5; i++) {
        const cate1 = new BoardCategoryEntity();
        cate1.name = {
          ko: `카테고리${i}`,
          en: `Category${i}`,
        };
        cate1.type = BoardType.NOTICE;
        cate1.orderBy = i;
        this.create(cate1);
      }

      return true;
    }
    return false;
  }
}
