import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductionOrdersService } from './production-orders.service';
import { CreateProductionOrderDto } from './dto/create-production-order.dto';
import { UpdateProductionOrderDto } from './dto/update-production-order.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('production-orders')
@Controller('production-orders')
export class ProductionOrdersController {
  constructor(
    private readonly productionOrdersService: ProductionOrdersService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create production order' })
  @ApiResponse({
    status: 201,
    description: 'The production order has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createProductionOrderDto: CreateProductionOrderDto) {
    return this.productionOrdersService.create(createProductionOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all production orders' })
  @ApiResponse({ status: 200, description: 'Return all production orders.' })
  findAll() {
    return this.productionOrdersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get production order by id' })
  @ApiResponse({ status: 200, description: 'Return the production order.' })
  @ApiResponse({ status: 404, description: 'Production order not found.' })
  findOne(@Param('id') id: string) {
    return this.productionOrdersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update production order' })
  @ApiResponse({
    status: 200,
    description: 'The production order has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Production order not found.' })
  update(
    @Param('id') id: string,
    @Body() updateProductionOrderDto: UpdateProductionOrderDto,
  ) {
    return this.productionOrdersService.update(id, updateProductionOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete production order' })
  @ApiResponse({
    status: 200,
    description: 'The production order has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Production order not found.' })
  remove(@Param('id') id: string) {
    return this.productionOrdersService.remove(id);
  }
}
