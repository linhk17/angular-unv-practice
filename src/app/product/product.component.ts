import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PRODUCTS } from '../mocked-product';
import { Product } from '../product.interface';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = PRODUCTS;
  url: String = '';
  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private title: Title,
    private meta: Meta) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.findProductById(id);
  }

  ngOnInit() { 
    this.title.setTitle('Angular Universal Product Detail Page');
    this.meta.updateTag({name: "description", content: ''});

        // Facebook metadata
        this.meta.addTag({name: 'og:card', content: 'summary'});
        this.meta.addTag({name: 'og:site', content: '@AngularUniv'});
        this.meta.addTag({name: 'og:title', content: 'Angular Universal Product Page Description'});
        this.meta.addTag({name: 'og:description', content: 'Angular Universal Product Page Description'});
        this.meta.addTag({name: 'og:text:description', content: 'Angular Universal Product Page Description'});
        this.meta.addTag({name: 'og:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200'});
  }

  findProductById(productId: any): any {
    return this.products.find(product => product.id === productId);
  }
} 