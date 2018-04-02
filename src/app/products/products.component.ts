import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct, AppState } from './product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;
  private _productsService;
  private sub: any;
  id: number;

  products: IProduct[] = [];

  constructor(productsService: ProductsService, private route: ActivatedRoute, private http: HttpClient) { 
    this._productsService = productsService;
  }

  // constructor(private store: Store<AppState>)
  // {

  // }

  getProducts(){
    this.sub = this.route.params.subscribe(p => {this.id = +p['id'];});
    if (this.id > 0)
    {
      this.products.push(this._productsService.getProduct(this.id));
    }
    else
    {
      this.products = this._productsService.getProducts();
      //this._productsService.getJsonProducts().subscribe(p => this.products = p);
    }

    //this.products$ = this.store.select(state => state.products)
  }

  ngOnInit() {
    this.getProducts();
  }

}
