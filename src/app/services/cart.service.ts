import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  constructor() {}


  addToCart(product: any) {
    this.cart.push(product);
    this.cartCount.next(this.cart.length);
  }

  getCart() {
    return this.cart;
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}

