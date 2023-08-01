import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { BoardRepository } from '../../domain/board/board.repository';
import { BoardCategoryRepository } from '../../domain/board/category.board.repository';
import { BoardEntity } from '../../domain/board/board.entity';
import { BoardDTO, BoardType } from '../../model/board.dto';
import {
  PageOptions,
  PageServiceInterface,
  Pagination,
} from '../page.service.interface';

export interface BoardOptions {
  type?: BoardType;
  categoryIds?: number[];
  hide?: boolean | undefined;
}

@Injectable()
export class BoardService
  implements PageServiceInterface<BoardEntity, number, BoardDTO, BoardOptions>
{
  constructor(
    private readonly repository: BoardRepository,
    private readonly boardCategoryRepository: BoardCategoryRepository,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  // C
  async create(
    entity: BoardEntity,
    registrantId: number,
  ): Promise<BoardEntity> {
    try {
      entity.createdBy = registrantId;
      entity.updatedBy = registrantId;
      return await this.repository.save(entity);
    } catch (e) {
      throw new Error(e);
    }
  }

  // R
  async get(id: number): Promise<BoardEntity> {
    return await this.repository.findOne({
      where: {
        id,
      },
      relations: ['categories'],
    });
  }

  async getDTO(
    id: number,
    lang: string,
    isAdmin?: boolean | false,
  ): Promise<BoardDTO> {
    // const entity = await this.repository.findOneBy({ id });
    const entity = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['categories'],
    });
    return new BoardDTO({ entity, lang, isAdmin, isThumb: false });
  }

  async page(
    options: PageOptions<BoardOptions>,
  ): Promise<Pagination<BoardEntity>> {
    const pagination = await this.repository.page(options);
    return {
      metadata: pagination.metadata,
      items: pagination.items,
    };
  }

  async pageDTO(
    options: PageOptions<BoardOptions>,
    isAdmin?: boolean | false,
  ): Promise<Pagination<BoardDTO>> {
    console.log(options.order, 'options.order');
    // options.selectFields = BoardDTO.toSelectFields();
    const pagination = await this.repository.page(options);
    return {
      metadata: pagination.metadata,
      items: pagination.items.map(
        (entity) => new BoardDTO({ entity, lang: options.lang, isAdmin }),
      ),
    };
  }

  // U
  async update(entity: BoardEntity, modifierId: number): Promise<BoardEntity> {
    if (!this.repository.hasId(entity)) {
      throw new Error('Not has id');
    }
    try {
      await this.repository.update(entity.id, {
        updatedBy: modifierId,
      });
      return await this.repository.save(entity);
    } catch (e) {
      throw new Error(e);
    }
  }

  // D
  async delete(id: number, deleterId: number): Promise<boolean> {
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
      await this.repository.update(id, {
        deleteBy: deleterId,
      });
      await this.repository.softDelete(id);
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }

  async deletes(ids: number[], deleterId: number): Promise<boolean> {
    if (!ids || ids.length === 0) {
      throw new Error('EMPTY_IDS');
    }
    ids.forEach((id) => {
      this.delete(id, deleterId);
    });
    return true;
  }

  async initCreate(): Promise<boolean> {
    const page = await this.page({ size: 10, page: 1, lang: 'ko' });

    if (page.metadata.total === 0) {
      for (let i = 0; i < 200; i++) {
        const board = new BoardEntity();
        board.type = i % 2 === 1 ? BoardType.NOTICE : BoardType.NOTICE;
        board.title = {
          ko: `한국말 제목 ${i}`,
          en: `English Title ${i}`,
        };
        board.content = {
          ko: `<h2>한국말</h2> <p>${i}</p>`,
          en: `<h2>English</h2> <p>${i}</p>`,
        };
        board.top = i % 2 === 1;
        const category = await this.boardCategoryRepository.findOne({
          where: {
            id: i % 2,
            type: board.type,
          },
        });
        board.categories = [category];
        this.create(board, 1);
      }
      return true;
    }
    return false;
  }
}
