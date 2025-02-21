import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductResponse } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent implements OnInit  {

 products: Product[] = [];

 constructor(private productService: ProductService) { }

 ngOnInit(): void {
   // A termékek lekérdezése a ProductService-ből
   this.productService.getProducts().subscribe((response: ProductResponse) => {
     this.products = response.products; // A válaszból eltároljuk a termékeket
   });
 }
}