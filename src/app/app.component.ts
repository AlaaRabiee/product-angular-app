import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'; // ✅ استيراد `ProductListComponent`

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ProductListComponent],
})
export class AppComponent { }
