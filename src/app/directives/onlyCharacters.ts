import { Directive, ElementRef, Renderer,Input, OnInit, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyCharacters]',
  host:{
      '(input)':'changeit()'
  }
})

export class OnlyCharacters implements OnInit, OnChanges{
    @Input() color:string;
    constructor(public el:ElementRef, public render:Renderer) {
        
    }
    ngOnInit() {
        console.log(this.el.nativeElement.value);
    }
    @HostListener('input') ngOnChanges() {
        //this.el.nativeElement.value = "fin";
    }
    changeit() {
        console.log('changeit');
    }
}
