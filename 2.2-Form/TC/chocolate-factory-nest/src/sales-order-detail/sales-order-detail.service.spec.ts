import { Test, TestingModule } from '@nestjs/testing';
import { SalesOrderDetailService } from './sales-order-detail.service';

describe('SalesOrderDetailService', () => {
  let service: SalesOrderDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesOrderDetailService],
    }).compile();

    service = module.get<SalesOrderDetailService>(SalesOrderDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
