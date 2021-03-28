import { Controller, Body, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productSevice: ProductsService) {}

  @Post('saveProduct')
  saveProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    return this.productSevice.saveProduct(prodTitle, prodDesc, prodPrice);
  }
}
