import { Module } from '@nestjs/common';
import { InventoryTransactionsService } from './inventory-transactions.service';
import { InventoryTransactionsController } from './inventory-transactions.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [InventoryTransactionsController],
  providers: [InventoryTransactionsService, PrismaService],
})
export class InventoryTransactionsModule {}
