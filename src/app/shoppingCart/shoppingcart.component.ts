import { Component, OnInit, OnChanges, ViewChild, ElementRef, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';
import { ProductList }  from './item.service';
import { HttpService } from '../http.service';
import { Itemlist } from './itemlist/itemlist.component';
@Component({
  selector: 'shopping-cart',
  templateUrl: 'app/shoppingCart/shopping.component.html',
  styleUrls:['app/shoppingCart/shoppingcart.component.css']
})
export class ShoppingCart implements OnInit, AfterViewInit, AfterContentInit {
  private productArr:any;
  private product:any;
  private cartItems:any=[];
  private totalPrize:any=0;
  @ViewChild(Itemlist) itemList:Itemlist;
  //@ContentChild('hello') hello:ElementRef;
  constructor(private productlist: ProductList, private http: HttpService, private el:ElementRef) {
    
  }
  ngOnInit () {
    this.http.getdata('../item.json').subscribe(data => {
        this.productArr = data;
        this.productlist.addProducts(data);
     });
    //console.log(this.el.nativeElement)
  }
  ngAfterViewInit () {
    console.log(this.itemList);
    //console.log(this.list);
  }
  ngAfterContentInit () {
    //console.log(this.hello);
  }
  productSelected (prod:any) {
    this.addToCart(prod);
    this.productArr.filter((item:any) => {
      if(item.id === prod.id) {
        item.added = true;
      }
    })
  }
  addToCart(prod:any) {
    if(!prod.added) {
      this.cartItems.push(prod);
      this.calcTotal(prod);
    }
  }
  calcTotal(prod:any) {
      this.totalPrize = this.totalPrize + prod.prize;
  }
  enableItem(prod:any) {
    this.productArr.filter((item:any) => {
      if(item.id === prod.id) {
        item.added = false;
      }
    })
    this.cartItems.splice(this.cartItems.indexOf(prod),1);
    this.totalPrize = this.totalPrize - prod.prize;
  }
  itemSearched(item:any) {
    this.product=item;
  }
}
