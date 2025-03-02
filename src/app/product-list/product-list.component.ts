import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',

  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  cartCount: number = 0;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartCount = this.cartService.getCart().length;
  }
}


