import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'app/shoppingCart/search/search.component.html'
})
export class Search {
  private itemEntered:any;
  @Output() searchItem:any=new EventEmitter();
  textEnter() {
    this.searchItem.emit(this.itemEntered);
  }
}
