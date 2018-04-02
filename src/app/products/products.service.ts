import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {
  private jsonUrl = './products.json'

  constructor(private http: HttpClient) { }
  getJsonProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.jsonUrl);
  }

  getProduct(id: number) : IProduct
  {
    let list: IProduct[] = this.getProducts();
    return list[id-1];
  }

  getProducts() : IProduct[] {
    return [
      {
        "productId": 1,
        "description": "Hanzo needs a nerf"
      },
      {
        "productId": 2,
        "description": "Junkrat needs a buff"        
      },
      {
        "productId": 3,
        "description": "Reaper is allllll right"
      }
    ];
  }

  saveProduct(id: number) {
    

  }
}
