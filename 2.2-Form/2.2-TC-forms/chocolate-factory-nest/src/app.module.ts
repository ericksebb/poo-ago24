import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { RawMaterialsModule } from './raw-materials/raw-materials.module';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { CustomersModule } from './customers/customers.module';
import { FinancialTransactionsModule } from './financial-transactions/financial-transactions.module';
import { InventoryTransactionsModule } from './inventory-transactions/inventory-transactions.module';
import { ProductionOrdersModule } from './production-orders/production-orders.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { PurchaseOrderDetailsModule } from './purchase-order-details/purchase-order-details.module';
import { SalesOrdersModule } from './sales-orders/sales-orders.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { SalesOrderDetailModule } from './sales-order-detail/sales-order-detail.module';
import configuration from './config/configuration';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema,
      isGlobal: true,
    }),
    EmployeesModule,
    RawMaterialsModule,
    ProductsModule,
    PrismaModule,
    CustomersModule,
    FinancialTransactionsModule,
    InventoryTransactionsModule,
    ProductionOrdersModule,
    PurchaseOrdersModule,
    PurchaseOrderDetailsModule,
    SalesOrdersModule,
    SuppliersModule,
    SalesOrderDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
