import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mocked-product';
import { Meta, StateKey, Title, TransferState, makeStateKey } from '@angular/platform-browser';
import { of, tap } from 'rxjs';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private title: Title,
    private meta: Meta,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.title.setTitle('Angular Universal Products Page');
    this.meta.updateTag({ name: "description", content: 'Angular Universal Products Page Description' });
  }

  getProducts(){
    this.productService.getProducts().subscribe((res: Product[]) => this.products = res)
  }
}