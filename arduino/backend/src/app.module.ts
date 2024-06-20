import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FridgesModule } from './fridges/fridges.module';

@Module({
  imports: [PrismaModule, FridgesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
