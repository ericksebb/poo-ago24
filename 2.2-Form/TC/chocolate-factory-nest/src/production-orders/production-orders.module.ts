// src/production-orders/production-orders.module.ts
import { Module } from '@nestjs/common';
import { ProductionOrdersService } from './production-orders.service';
import { ProductionOrdersController } from './production-orders.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProductionOrdersController],
  providers: [ProductionOrdersService, PrismaService],
})
export class ProductionOrdersModule {}
