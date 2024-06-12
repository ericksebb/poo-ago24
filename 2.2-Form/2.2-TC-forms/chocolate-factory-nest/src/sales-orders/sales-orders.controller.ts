import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalesOrdersService } from './sales-orders.service';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { UpdateSalesOrderDto } from './dto/update-sales-order.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sales-orders')
@Controller('sales-orders')
export class SalesOrdersController {
  constructor(private readonly salesOrdersService: SalesOrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create sales order' })
  @ApiResponse({
    status: 201,
    description: 'The sales order has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createSalesOrderDto: CreateSalesOrderDto) {
    return this.salesOrdersService.create(createSalesOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales orders' })
  @ApiResponse({ status: 200, description: 'Return all sales orders.' })
  findAll() {
    return this.salesOrdersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales order by id' })
  @ApiResponse({ status: 200, description: 'Return the sales order.' })
  @ApiResponse({ status: 404, description: 'Sales order not found.' })
  findOne(@Param('id') id: string) {
    return this.salesOrdersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update sales order' })
  @ApiResponse({
    status: 200,
    description: 'The sales order has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Sales order not found.' })
  update(
    @Param('id') id: string,
    @Body() updateSalesOrderDto: UpdateSalesOrderDto,
  ) {
    return this.salesOrdersService.update(id, updateSalesOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete sales order' })
  @ApiResponse({
    status: 200,
    description: 'The sales order has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Sales order not found.' })
  remove(@Param('id') id: string) {
    return this.salesOrdersService.remove(id);
  }
}
