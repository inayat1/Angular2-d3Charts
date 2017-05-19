import * as d3 from 'd3';
import { Component, ElementRef ,OnInit , Input, OnChanges} from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: 'app/d3/piechart/pie.component.html'
})
export class Piechart implements OnInit, OnChanges{
  @Input() fruitsalad:any;
  constructor(private elementRef : ElementRef) {
  }
  el = this.elementRef.nativeElement;

  ngOnChanges(changes:any) {
    //this.fruitsalad=changes.fruitsalad.currentValue;
    if(this.fruitsalad.length >0) {
      this.makefruitChart();
    }
  }
  ngOnInit() {

  }
  makefruitChart() {
    var radius = 100, width=200, height=200, svg, arcs:any, pie:any, chart, color:any, text, data:any=[];
    if(d3.select('svg')) {
      d3.select("svg").remove();
    }
    svg = d3.select(this.el).append('svg').attr('width',width*2).attr('height',height*2).append('g').attr('transform','translate('+width/2+','+height+')');
    color = d3.scaleOrdinal(d3.schemeCategory10);
    this.fruitsalad.filter((fruit:any)=> {
      if(fruit.active) {
        data = fruit.components;
      }
    })
    arcs= d3.arc()   // path generater
      .innerRadius(0)
      .outerRadius(radius);
    pie = d3.pie()  // provide start angle and end angle to the path generator
        .value((d:any)=>d.per);

    chart = svg.selectAll('path')
          .data(pie(data))
          .enter()
          .append('path')
          .attr('d',arcs)
          .style('fill', (d:any)=>color(d.data.name))

    text = svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x',width/1.3)
        .attr('y',(d:any,i:any)=>(-20*i))
        .text((d:any)=>d.name+' -'+ d.per+'mg')
        .attr('fill',(d:any)=>color(d.name))
  }
}
