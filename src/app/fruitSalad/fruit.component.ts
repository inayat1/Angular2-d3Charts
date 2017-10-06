import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'fruit-salad',
  templateUrl: './fruit.component.html',
  styleUrls:['./fruit.component.css']
})
export class Fruitsalad implements OnInit {
  private allfruits:any=[];
  private allVitamins:any=[];
  private fruitNames:any=[];
  private vitdata:any=[];
  constructor(private http: HttpService) {}
  ngOnInit () {
    this.http.getdata('../fruits.json').subscribe(data => {
        this.allfruits = data;
        this.allVitamins = data[0].components;
        this.getFruitNames();
     });
  }
  getFruitNames() {
    this.fruitNames = this.allfruits.map((fruit:any)=> {
      return fruit.name
    })
  }
  fruitSelected(evt:any) {
    this.allfruits = this.allfruits.map((fruit:any)=> {
      if(fruit.name === evt.target.value) {
        fruit.active = true;
      } else {
        fruit.active = false;
      }
      return fruit
    })
  }
  vitaminSelected(evt:any) {
    var vitaminData:any;
    this.vitdata =  this.allfruits.map((fruit:any)=> {
        fruit.components.filter((vit:any)=> {
          if(vit.name === evt.target.value) {
            vitaminData=vit.per;
          }
        })
        return vitaminData
    })
  }
}
