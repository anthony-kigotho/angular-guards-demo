// src/app/product-details/product-details.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Product Details</h1><p>Protected by Resolve Guard</p><pre>{{ product | json }}</pre>`,
})
export class ProductDetailsComponent {
  product: any;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.product = data['product'];
    });
  }
}
