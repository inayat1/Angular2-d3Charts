import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './itemlist.component.html',
  styleUrls:['./itemlist.component.css']
})
export class Itemlist implements AfterContentInit {
  @ContentChild('hello') hello:ElementRef;
  @Input() allProducts:any;
  @Input() searchProd:any;
  @Output() buyclicked:EventEmitter<string>=new EventEmitter<string>();
  buyproduct(item:any) {
    this.buyclicked.emit(item);
  }
  ngAfterContentInit() {
    console.log(this.hello);
  }
}
