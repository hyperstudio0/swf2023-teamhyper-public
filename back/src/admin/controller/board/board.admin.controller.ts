import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BoardService } from '../../../service/board/board.service';
import {
  endTimeOption,
  pageOption,
  queryOption,
  sizeOption,
  startTimeOption,
} from '../../../utils/paginate.utils';
import { I18nLang } from 'nestjs-i18n';
import {
  BoardCategoryDTO,
  BoardDTO,
  BoardPage,
  BoardType,
  ReqBoard,
} from '../../../model/board.dto';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { ResResult } from '../../../model/result.dto';
import { BoardCategoryService } from '../../../service/board-category/board-category.service';

@ApiTags('게시판')
@Controller('api/v1/board')
export class BoardAdminController {
  constructor(
    private readonly boardService: BoardService,
    private readonly boardCategoryService: BoardCategoryService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '게시판 paging',
    operationId: 'boardPage',
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'ko-KR',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: 'Board',
    type: BoardPage,
  })
  @ApiQuery(queryOption)
  @ApiQuery(startTimeOption)
  @ApiQuery(endTimeOption)
  @ApiQuery(sizeOption)
  @ApiQuery(pageOption)
  @ApiQuery({
    enum: BoardType,
    name: 'type',
    example: 'NOTICE',
    description: '게시판 유형',
  })
  @ApiQuery({
    required: false,
    type: [Number],
    name: 'categoryIds',
    description: '카테고리',
  })
  @ApiQuery({
    required: false,
    type: String,
    name: 'orderBy',
    description: '순서변경',
  })
  @ApiQuery({
    required: false,
    type: Boolean,
    name: 'hide',
    description: '숨김',
  })
  async page(
    @Req() request,
    @Query('query') query: string | undefined,
    @Query('startTime') startTime: Date | undefined,
    @Query('endTime') endTime: Date | undefined,
    @Query('size', new DefaultValuePipe(20)) size: number,
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('type') type: BoardType,
    @Query('categoryIds') categoryIds: number[],
    @Query('orderBy') orderBy: string | undefined,
    @Query('hide') hide: boolean | undefined,
    @I18nLang() lang: string,
  ): Promise<BoardPage> {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return this.boardService.pageDTO(
      {
        query: query && decodeURIComponent(query),
        size,
        page,
        startTime,
        endTime,
        order: orderBy
          ? JSON.parse(orderBy)
          : {
              top: 'DESC',
              createdTime: 'DESC',
            },
        lang,
        addOptions: {
          type,
          categoryIds,
          hide,
        },
      },
      true,
    );
  }

  @Get('/categories')
  @ApiOperation({
    summary: '게시판 카테고리',
    operationId: 'boardCategories',
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'ko-KR',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: '카테고리 목록',
    type: [BoardCategoryDTO],
  })
  @ApiQuery({
    enum: BoardType,
    name: 'type',
    example: 'NOTICE',
    description: '게시판 유형',
  })
  async categories(
    @Req() request,
    @Query('type') type: BoardType,
    @I18nLang() lang: string,
  ): Promise<BoardCategoryDTO[]> {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return this.boardCategoryService.listDTO(
      {
        addOptions: {
          type,
        },
        lang,
      },
      true,
    );
  }

  @Get('/:id')
  @ApiOperation({
    summary: '게시판 상세',
    operationId: 'boardGet',
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'ko-KR',
  })
  @ApiBearerAuth('Authorization')
  @ApiResponse({
    status: 200,
    description: 'Board',
    type: BoardDTO,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the board',
  })
  async get(
    @Req() request,
    @Param('id') id: number,
    @I18nLang() lang: string,
  ): Promise<BoardDTO> {
    return this.boardService.getDTO(id, lang, true);
  }

  @Post()
  @ApiOperation({
    summary: '게시판 등록',
    operationId: 'boardCreate',
  })
  @ApiResponse({
    status: 200,
    description: '등록 결과',
    type: BoardDTO,
  })
  @ApiBody({ type: ReqBoard, description: '게시물' })
  async create(@Req() request, @Body() body: ReqBoard): Promise<BoardDTO> {
    console.log(body, 'board');
    return null;
  }

  @Delete('/:id')
  @ApiOperation({
    summary: '게시판 삭제',
    operationId: 'boardDelete',
  })
  @ApiResponse({
    status: 200,
    description: '삭제 결과',
    type: ResResult,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the board',
  })
  async delete(@Req() request, @Param('id') id: number): Promise<ResResult> {
    const result = await this.boardService.delete(
      id,
      request.authedUser.userId,
    );
    return new ResResult(
      result,
      result ? '삭제를 완료하였습니다.' : '삭제를 실패하였습니다.',
    );
  }

  @Delete()
  @ApiOperation({
    summary: '게시판 삭제',
    operationId: 'boardDeleteByIds',
  })
  @ApiResponse({
    status: 200,
    description: '삭제 결과',
    type: ResResult,
  })
  @ApiBody({ type: [Number], description: '게시물 ID' })
  async multiDelete(
    @Req() request,
    @Body() boardIds: number[],
  ): Promise<ResResult> {
    const result = await this.boardService.deletes(
      boardIds,
      request.authedUser.userId,
    );
    return new ResResult(
      result,
      result ? '삭제를 완료하였습니다.' : '삭제를 실패하였습니다.',
    );
  }
}
