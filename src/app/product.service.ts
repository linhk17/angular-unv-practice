import { Injectable } from '@angular/core';
import { StateKey, TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of, tap } from 'rxjs';
import { Product } from './product.interface';
import { PRODUCTS } from './mocked-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly key: StateKey<number> = makeStateKey<number>(
    'PRODUCTS_DATA'
  );
  constructor(
    private transferState: TransferState
  ) { }

  getProducts(): Observable<Product[]> {
    const productState: any = this.transferState.get(this.key, null);
    if (productState)
      return of(productState)

    return of(PRODUCTS).pipe(tap((res: any) => {
      this.transferState.set(this.key, res)
    }))
  }
}
