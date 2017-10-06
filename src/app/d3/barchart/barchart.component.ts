import * as d3 from 'd3';
import { Component, ElementRef ,OnInit , Input, OnChanges} from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './barchart.component.html'
})
export class Barchart implements OnInit, OnChanges{
  @Input() vitaminData:any;
  @Input() fruits:any;
  constructor(private elementRef : ElementRef) {
  }
  el = this.elementRef.nativeElement;

  ngOnChanges(changes:any) {
    if(changes.vitaminData !== undefined) {
      if(changes.vitaminData.currentValue.length > 0) {
        this.compareFruits();
      }
    }

  }
  ngOnInit() {

  }
  compareFruits() {
    var svggroup, width=500, height=500, xscale:any, yscale:any,data:any,xlabel,ylabel,margin,vscale:any,color:any,maxData:any;
    data ={'fruit':this.fruits,'value':this.vitaminData};
    if(d3.select('.bar')) {
      d3.select(".bar").remove();
    }
    margin= {'left':100,'bottom':100};
    svggroup = d3.select(this.el).append('svg').attr('class','bar').attr('width',width).attr('height',height).append('g').attr('transform','translate('+margin.left+',10)');
    width=width-margin.left;
    height=height-margin.bottom;
    maxData = d3.max(data.value);
    yscale = d3.scaleLinear()
          .domain([0,maxData])
          .range([0,(height)])

    xscale = d3.scaleBand()
            .domain(data.fruit)
            .rangeRound([0, (width)])
            .padding(0.1);

    color = d3.scaleOrdinal(d3.schemeCategory10);
    vscale = d3.scaleLinear()
          .domain([0,maxData])
          .range([height,0])

    xlabel = d3.axisBottom(xscale)
            .scale(xscale);

    ylabel = d3.axisLeft(vscale)
            .scale(vscale);

    var chart = svggroup.selectAll('rect')
                .data(data.value)
                .enter()
                .append('rect')
                .attr('width',xscale.bandwidth())
                .attr('x',(d:any,i:any)=>xscale(data.fruit[i]))
                .attr('y',(d:any)=>height-yscale(d))
                .attr('height', (d:any)=>yscale(d))
                .style('fill',(d:any,i:any)=>color(data.fruit[i]));
      svggroup.append('g').attr('transform','translate(0,'+(height)+')').call(xlabel);
      svggroup.append('g').call(ylabel);
  }
}
