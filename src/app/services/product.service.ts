import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://www.macworld.com/wp-content/uploads/2023/01/imac_21_5_2019_with_mba2019_04-1.jpg?quality=50&strip=all' },
    { id: 4, name: 'Product 4', price: 150, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D'},
   { id: 5, name: 'Product 5', price: 350, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKbrVcO9dWXDQZ8AnJfs2OIqny6VQiaHflg&s' },
    { id: 6, name: 'Product 6', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEY0hh4bxqd_y3MBbcIKfSLYlUtt1u-rH7BQ&s' },

  ];

  getProducts() {
    return this.products;
  }
}
