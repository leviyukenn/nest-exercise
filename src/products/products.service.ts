import { Product } from './products.model';
import { Injectable } from '@nestjs/common';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  saveProduct(title: string, description: string, price: number) {
    const productId = Date.now().toString();
    const product = new Product(productId, title, description, price);
    this.products.push(product);

    return productId;
  }
}
