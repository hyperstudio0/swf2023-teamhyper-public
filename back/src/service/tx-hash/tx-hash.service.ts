import {Injectable} from '@nestjs/common';
import {I18nService} from "nestjs-i18n";
import {I18nTranslations} from "../../generated/i18n.generated";
import {PageOptions, PageServiceInterface, Pagination} from "../page.service.interface";
import {BoardOptions} from "../board/board.service";
import {TxHashEntity} from "../../domain/txhash/txhash.entity";
import {TxHashDTO, TxHashOptions} from "../../model/smart-contract.dto";
import {TxHashRepository} from "../../domain/txhash/txhash.repository";

@Injectable()
export class TxHashService
    implements PageServiceInterface<TxHashEntity, number, TxHashDTO, TxHashOptions> {

    constructor(
        private readonly repository: TxHashRepository,
        private readonly i18n: I18nService<I18nTranslations>,
    ) {}


    // C
    async create(
        entity: TxHashEntity,
        registrantId: number,
    ): Promise<TxHashEntity> {
        console.log(entity, 'entity');
        try {
            entity.createdBy = registrantId;
            entity.updatedBy = registrantId;
            return await this.repository.save(entity);
        } catch (e) {
            throw new Error(e);
        }
    }

    // R
    async get(id: number): Promise<TxHashEntity> {
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
    ): Promise<TxHashDTO> {
        // const entity = await this.repository.findOneBy({ id });
        const entity = await this.repository.findOne({
            where: {
                id,
            },
            relations: [],
        });
        return new TxHashDTO({ entity, lang, isAdmin, isThumb: false });
    }

    async page(
        options: PageOptions<TxHashOptions>,
    ): Promise<Pagination<TxHashEntity>> {
        const pagination = await this.repository.page(options);
        return {
            metadata: pagination.metadata,
            items: pagination.items,
        };
    }

    async pageDTO(
        options: PageOptions<TxHashOptions>,
        isAdmin?: boolean | false,
    ): Promise<Pagination<TxHashDTO>> {
        console.log(options.order, 'options.order');
        // options.selectFields = TxHashDTO.toSelectFields();
        const pagination = await this.repository.page(options);
        return {
            metadata: pagination.metadata,
            items: pagination.items.map(
                (entity) => new TxHashDTO({ entity, lang: options.lang, isAdmin }),
            ),
        };
    }

    // U
    async update(entity: TxHashEntity, modifierId: number): Promise<TxHashEntity> {
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
}
