import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './products/product.reducer'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductsComponent },
      {path: 'products/:id', component: ProductsComponent },
      {path: 'start', component: WelcomeComponent },
      {path: '', redirectTo: 'start', pathMatch: 'full' },
      {path: '**', redirectTo: 'start', pathMatch: 'full' }
    ]),
    StoreModule.forRoot({products: productReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
