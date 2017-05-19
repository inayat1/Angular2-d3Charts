import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'filterlist'
})
export class Filterlist implements PipeTransform {
  transform (allProducts:any, searchProd:any){
    if(searchProd === undefined) {
      return allProducts;
    }
    return allProducts.filter(function(item:any){
      return item.name.includes(searchProd)
    })
  }
}
