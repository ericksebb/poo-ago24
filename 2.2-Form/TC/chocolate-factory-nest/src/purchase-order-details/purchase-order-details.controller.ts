import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchaseOrderDetailsService } from './purchase-order-details.service';
import { CreatePurchaseOrderDetailDto } from './dto/create-purchase-order-detail.dto';
import { UpdatePurchaseOrderDetailDto } from './dto/update-purchase-order-detail.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('purchase-order-details')
@Controller('purchase-order-details')
export class PurchaseOrderDetailsController {
  constructor(
    private readonly purchaseOrderDetailsService: PurchaseOrderDetailsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create purchase order detail' })
  @ApiResponse({
    status: 201,
    description: 'The purchase order detail has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createPurchaseOrderDetailDto: CreatePurchaseOrderDetailDto) {
    return this.purchaseOrderDetailsService.create(
      createPurchaseOrderDetailDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all purchase order details' })
  @ApiResponse({
    status: 200,
    description: 'Return all purchase order details.',
  })
  findAll() {
    return this.purchaseOrderDetailsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get purchase order detail by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the purchase order detail.',
  })
  @ApiResponse({ status: 404, description: 'Purchase order detail not found.' })
  findOne(@Param('id') id: string) {
    return this.purchaseOrderDetailsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update purchase order detail' })
  @ApiResponse({
    status: 200,
    description: 'The purchase order detail has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Purchase order detail not found.' })
  update(
    @Param('id') id: string,
    @Body() updatePurchaseOrderDetailDto: UpdatePurchaseOrderDetailDto,
  ) {
    return this.purchaseOrderDetailsService.update(
      id,
      updatePurchaseOrderDetailDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete purchase order detail' })
  @ApiResponse({
    status: 200,
    description: 'The purchase order detail has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Purchase order detail not found.' })
  remove(@Param('id') id: string) {
    return this.purchaseOrderDetailsService.remove(id);
  }
}
