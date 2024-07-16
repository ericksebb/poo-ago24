import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RegistersModule } from './registers/registers.module';
import { ResourcesModule } from './resources/resources.module';
import { SensorsModule } from './sensors/sensors.module';

@Module({
  imports: [PrismaModule, RegistersModule, ResourcesModule, SensorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
