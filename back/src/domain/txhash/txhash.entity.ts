import {Column, Entity} from 'typeorm';
import {AbstractEntity} from '../abstract.entity';
import {ApiProperty} from '@nestjs/swagger';
import {Pagination, PaginationMetadata,} from '../../service/page.service.interface';
import {TxHashDTO} from "../../model/smart-contract.dto";

export enum Type {
    WHITELIST = 'WHITELIST',
    BLACKLIST = 'BLACKLIST',
}
export enum Mode {
    CREATE = 'CREATE',
    DELETE = 'DELETE'
}

@Entity({
    name: 'TxHash',
    synchronize: true,
})
export class TxHashEntity extends AbstractEntity {

    @Column({type: 'enum', enum: Type, comment: '유형'})
    type: Type;

    @Column({type: 'enum', enum: Mode, comment: '모드'})
    mode: Mode;

    @Column({nullable: true, unique: true})
    hash: string;

    @Column({type: 'int', comment: '블랙리스트 이유', nullable: true})
    reason?: number | undefined;

    @Column({type: 'int', comment: '블랙리스트 상세 유형', nullable: true})
    identityType?: number | undefined;
}

export class BoardPage extends Pagination<TxHashDTO> {
    @ApiProperty({type: [TxHashDTO], description: '데이터'})
    public items: TxHashDTO[];

    @ApiProperty({description: '페이지 메타 정보'})
    public metadata: PaginationMetadata;
}
