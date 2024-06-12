import { Module } from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { RawMaterialsController } from './raw-materials.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [RawMaterialsController],
  providers: [RawMaterialsService],
  imports: [PrismaModule],
})
export class RawMaterialsModule {}
