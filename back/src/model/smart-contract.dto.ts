import {ApiProperty} from "@nestjs/swagger";
import {Mode, TxHashEntity, Type} from "../domain/txhash/txhash.entity";
import {DTOOption} from "./default.dto";
import {Pagination, PaginationMetadata} from "../service/page.service.interface";
import {BoardDTO} from "./board.dto";


export class TxHashDTO {

    constructor(options: DTOOption<TxHashEntity>) {
        const txHash = options.entity;

        this.id = txHash.id;
        this.hash = txHash.hash;
        this.type = txHash.type;
        this.mode = txHash.mode;
        if (txHash.reason !== undefined) {
            switch (txHash.reason) {
                case 0:  // 피싱 시도
                    this.reason = "피싱 시도";
                    break;
                case 1:  // 사기 행위
                    this.reason = "사기 행위";
                    break;
                case 2:  // 의심스러운 활동
                    this.reason = "의심스러운 활동";
                    break;
                case 3:  // 부정 행위
                    this.reason = "부정 행위";
                    break;
                case 4:  // 신분 도용
                    this.reason = "신분 도용";
                    break;
                case 5:  // 불법 거래
                    this.reason = "불법 거래";
                    break;
                case 6: // 돈세탁
                    this.reason = "돈세탁";
                    break;
                case 7:  // 불법 시장 활동
                    this.reason = "불법 시장 활동";
                    break;
                case 8:  // 높은 위험
                    this.reason = "높은 위험";
                    break;
                case 9: // 기타
                    this.reason = "기타";
                    break;
                default:
                    this.reason = "알 수 없는 이유";
            }
        }
        this.identityType = txHash.identityType || undefined;
        this.createdTime = txHash.createdTime;
        this.createdBy = txHash.createdBy;
        this.updatedTime = txHash.updatedTime;
        this.updatedBy = txHash.updatedBy;
    }

    @ApiProperty()
    id: number;
    @ApiProperty()
    hash: string;
    @ApiProperty()
    type: Type;
    @ApiProperty()
    mode: Mode;
    @ApiProperty()
    reason?: string | undefined;
    @ApiProperty()
    identityType?: number | undefined;
    @ApiProperty({ example: '', description: '등록일' })
    createdTime: Date;

    @ApiProperty({ example: '', description: '등록한 계정 ID' })
    createdBy: number;

    @ApiProperty({ example: '', description: '수정시간' })
    updatedTime: Date;

    @ApiProperty({ example: '', description: '수정한 계정 ID' })
    updatedBy: number;
}

export interface TxHashOptions {
    type?: Type;
    mode?: Mode;
    hide?: boolean | undefined;
}
export class TxHashPage extends Pagination<TxHashDTO> {
    @ApiProperty({ type: [TxHashDTO], description: '데이터' })
    public items: TxHashDTO[];

    @ApiProperty({ description: '페이지 메타 정보' })
    public metadata: PaginationMetadata;
}


export class Count {
    @ApiProperty()
    whiteList: number | 0;
    @ApiProperty()
    blackList: number | 0;
}


export class PostWhiteList {
    @ApiProperty()
    did: string;
}

export class PostBlackListBody {
    @ApiProperty()
    id: string;

    @ApiProperty()
    reason?: number;

    @ApiProperty()
    identityType?: number;
}

export class ContractResponse {
    @ApiProperty()
    hash: string;

    @ApiProperty()
    body: any;
}


export class AuthBody {
    @ApiProperty()
    value: string;
}

export class BlacklistResultBody {
    @ApiProperty()
    isBlackListed: boolean;
    @ApiProperty()
    reason: number;
    @ApiProperty()
    identityType: number;
}

export class AuthResultBody {
    @ApiProperty()
    isWhiteListed: boolean;
    @ApiProperty()
    blackListed: BlacklistResultBody;
}




