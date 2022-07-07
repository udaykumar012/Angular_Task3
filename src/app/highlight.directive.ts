import { Directive ,Input,ElementRef,OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
    defaultColor='yellow';
    //property decorator
    @Input('appHighlight') bgColor?:string;
  constructor(private el:ElementRef) { }
  ngOnChanges() {
      this.el.nativeElement.style.backgroundColor=this.bgColor || this.defaultColor
  }
}
