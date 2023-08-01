import { Test, TestingModule } from '@nestjs/testing';
import { TxHashService } from './tx-hash.service';

describe('TxHashService', () => {
  let service: TxHashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TxHashService],
    }).compile();

    service = module.get<TxHashService>(TxHashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
