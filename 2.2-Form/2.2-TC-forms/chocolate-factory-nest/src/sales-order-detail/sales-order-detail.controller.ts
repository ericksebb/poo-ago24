import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalesOrderDetailsService } from './sales-order-detail.service';
import { CreateSalesOrderDetailDto } from './dto/create-sales-order-detail.dto';
import { UpdateSalesOrderDetailDto } from './dto/update-sales-order-detail.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sales-order-details')
@Controller('sales-order-details')
export class SalesOrderDetailsController {
  constructor(
    private readonly salesOrderDetailsService: SalesOrderDetailsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create sales order detail' })
  @ApiResponse({
    status: 201,
    description: 'The sales order detail has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createSalesOrderDetailDto: CreateSalesOrderDetailDto) {
    return this.salesOrderDetailsService.create(createSalesOrderDetailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales order details' })
  @ApiResponse({ status: 200, description: 'Return all sales order details.' })
  findAll() {
    return this.salesOrderDetailsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales order detail by id' })
  @ApiResponse({ status: 200, description: 'Return the sales order detail.' })
  @ApiResponse({ status: 404, description: 'Sales order detail not found.' })
  findOne(@Param('id') id: string) {
    return this.salesOrderDetailsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update sales order detail' })
  @ApiResponse({
    status: 200,
    description: 'The sales order detail has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Sales order detail not found.' })
  update(
    @Param('id') id: string,
    @Body() updateSalesOrderDetailDto: UpdateSalesOrderDetailDto,
  ) {
    return this.salesOrderDetailsService.update(id, updateSalesOrderDetailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete sales order detail' })
  @ApiResponse({
    status: 200,
    description: 'The sales order detail has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Sales order detail not found.' })
  remove(@Param('id') id: string) {
    return this.salesOrderDetailsService.remove(id);
  }
}
