import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `<h1>Application</h1>
            <div>
                <a routerLink='/todo' routerLinkActive='actived'>Todo App</a>
                <a routerLink='/shop' routerLinkActive='actived'>Shopping Cart</a>
                <a routerLink='/fruits' routerLinkActive='actived'>Fruit Salad</a>
            </div>
            `,
    styleUrls:['./dashboard.component.css']
})
export class Dashboard  { 

 }
