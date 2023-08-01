import {Controller, DefaultValuePipe, Get, Query, Req} from '@nestjs/common';
import {ApiHeader, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags,} from '@nestjs/swagger';
import {BoardService} from '../../../service/board/board.service';
import {endTimeOption, pageOption, queryOption, sizeOption, startTimeOption,} from '../../../utils/paginate.utils';
import {I18nLang} from 'nestjs-i18n';
import {BoardDTO, BoardPage, BoardType} from '../../../model/board.dto';
import {Param} from '@nestjs/common/decorators/http/route-params.decorator';
import {Public} from '../api.auth.guard';

@ApiTags('게시판')
@Controller('api/v1/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: '게시판 paging',
    operationId: 'boardPage',
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'ko-KR',
  })
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
  async page(
    @Req() request,
    @Query('query') query: string,
    @Query('startTime') startTime: Date,
    @Query('endTime') endTime: Date,
    @Query('size', new DefaultValuePipe(20)) size: number,
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('type') type: BoardType,
    @Query('categoryIds') categoryIds: number[],
    @I18nLang() lang: string,
  ): Promise<BoardPage> {
    return this.boardService.pageDTO({
      query,
      size,
      page,
      startTime,
      endTime,
      order: {
        top: 'DESC',
        createdTime: 'DESC',
      },
      lang,
      addOptions: {
        type,
        categoryIds,
      },
    });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({
    summary: '게시판 상세',
    operationId: 'boardGet',
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'ko-KR',
  })
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
    return this.boardService.getDTO(id, lang);
  }
}
