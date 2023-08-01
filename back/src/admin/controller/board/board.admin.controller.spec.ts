import { Test, TestingModule } from '@nestjs/testing';
import { BoardAdminController } from './board.admin.controller';

describe('BoardAdminController', () => {
  let controller: BoardAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardAdminController],
    }).compile();

    controller = module.get<BoardAdminController>(BoardAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
