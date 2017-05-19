import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: 'app/shoppingCart/itemlist/itemlist.component.html',
  styleUrls:['app/shoppingCart/itemlist/itemlist.component.css']
})
export class Itemlist {
  @Input() allProducts:any;
  @Input() searchProd:any;
  @Output() buyclicked:EventEmitter<string>=new EventEmitter<string>();
  buyproduct(item:any) {
    this.buyclicked.emit(item);
  }
}
