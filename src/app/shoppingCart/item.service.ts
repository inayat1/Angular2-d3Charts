import { HttpService } from '../http.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ProductList {
  private productList:any[];
    constructor(private dataUrl: HttpService) {
    }
    addProducts(data:any) {
      this.productList = data;
    }
    getProductList() {
      return this.productList;
    }
}
