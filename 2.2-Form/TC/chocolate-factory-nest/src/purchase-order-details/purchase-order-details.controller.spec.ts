import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrderDetailsController } from './purchase-order-details.controller';
import { PurchaseOrderDetailsService } from './purchase-order-details.service';

describe('PurchaseOrderDetailsController', () => {
  let controller: PurchaseOrderDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseOrderDetailsController],
      providers: [PurchaseOrderDetailsService],
    }).compile();

    controller = module.get<PurchaseOrderDetailsController>(PurchaseOrderDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
