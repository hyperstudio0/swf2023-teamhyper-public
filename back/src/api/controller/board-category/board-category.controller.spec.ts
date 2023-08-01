import { Test, TestingModule } from '@nestjs/testing';
import { BoardCategoryController } from './board-category.controller';

describe('BoardCategoryController', () => {
  let controller: BoardCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardCategoryController],
    }).compile();

    controller = module.get<BoardCategoryController>(BoardCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
