import { Controller, Get, Query, Req } from '@nestjs/common';
import {
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BoardCategoryService } from '../../../service/board-category/board-category.service';
import { BoardCategoryDTO, BoardType } from '../../../model/board.dto';
import {
  endTimeOption,
  queryOption,
  startTimeOption,
} from '../../../utils/paginate.utils';
import { I18nLang } from 'nestjs-i18n';
import { Public } from '../api.auth.guard';

@ApiTags('게시판 카테고리')
@Controller('api/v1/board-category')
export class BoardCategoryController {
  constructor(private readonly boardCategoryService: BoardCategoryService) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: '게시판 카테고리 list',
    operationId: 'boardCategoryList',
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'ko-KR',
  })
  @ApiResponse({
    status: 200,
    description: 'Board Categories',
    type: [BoardCategoryDTO],
  })
  @ApiQuery(queryOption)
  @ApiQuery(startTimeOption)
  @ApiQuery(endTimeOption)
  @ApiQuery({
    enum: BoardType,
    name: 'type',
    example: 'NOTICE',
    description: '게시판 유형',
  })
  async list(
    @Req() request,
    @Query('query') query: string,
    @Query('startTime') startTime: Date,
    @Query('endTime') endTime: Date,
    @Query('type') type: BoardType,
    @I18nLang() lang: string,
  ): Promise<BoardCategoryDTO[]> {
    return this.boardCategoryService.listDTO({
      query,
      startTime,
      endTime,
      order: {
        orderBy: 'ASC',
        createdTime: 'DESC',
      },
      lang,
      addOptions: {
        type,
      },
    });
  }
}
