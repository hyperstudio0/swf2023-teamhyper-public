import {ApiProperty} from "@nestjs/swagger";

export class Count {
    @ApiProperty()
    whiteList: number | 0;
    @ApiProperty()
    blackList: number | 0;
}
