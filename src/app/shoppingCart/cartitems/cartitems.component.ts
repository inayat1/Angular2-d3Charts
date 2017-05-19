import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-items',
  templateUrl: 'app/shoppingCart/cartitems/cartitems.component.html',
  styleUrls:['app/shoppingCart/cartitems/cartitems.component.css']
})
export class CartItems {
  @Input() cartProd:any;
  @Input() totalCartPrize:any;
  @Output() deletefromcart:EventEmitter<string>=new EventEmitter<string>();
  deleteItem(item:any) {
    this.deletefromcart.emit(item);
  }
}
