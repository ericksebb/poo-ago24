import { Test, TestingModule } from '@nestjs/testing';
import { SalesOrderDetailController } from './sales-order-detail.controller';
import { SalesOrderDetailService } from './sales-order-detail.service';

describe('SalesOrderDetailController', () => {
  let controller: SalesOrderDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesOrderDetailController],
      providers: [SalesOrderDetailService],
    }).compile();

    controller = module.get<SalesOrderDetailController>(SalesOrderDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
