import { Routes, RouterModule } from '@angular/router';
import { Todo } from './todo/todo.component';
import { ShoppingCart } from './shoppingCart/shoppingcart.component';
import { Fruitsalad } from './fruitSalad/fruit.component';

const Route_Const:Routes=[
  {path:'', redirectTo:'fruits', pathMatch:'full'},
  {path:'todo', component: Todo},
  {path:'shop', component: ShoppingCart},
  {path:'fruits', component: Fruitsalad}
]

export const routing = RouterModule.forRoot(Route_Const)
