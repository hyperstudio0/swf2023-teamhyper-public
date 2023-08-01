import { Test, TestingModule } from '@nestjs/testing';
import { TxHashController } from './tx-hash.controller';

describe('TxHashController', () => {
  let controller: TxHashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TxHashController],
    }).compile();

    controller = module.get<TxHashController>(TxHashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
