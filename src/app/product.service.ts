// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductDetails() {
    // Simulate fetching product data
    return of({ id: 1, name: 'Sample Product', price: 99.99 });
  }
}
