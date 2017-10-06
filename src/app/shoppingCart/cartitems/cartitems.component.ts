import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'cart-items',
  templateUrl: './cartitems.component.html',
  styleUrls:['./cartitems.component.css']
})
export class CartItems {
  @Input() cartProd:any;
  @Input() totalCartPrize:any;
  @Output() deletefromcart:EventEmitter<string>=new EventEmitter<string>();
  constructor(private el:ElementRef){
    console.log(this.el.nativeElement)
  };
  deleteItem(item:any) {
    this.deletefromcart.emit(item);
  }
}
