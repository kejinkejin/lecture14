import { Directive, ElementRef, Renderer, TemplateRef,  AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective implements AfterViewInit{

  constructor(public element:ElementRef) { 
    //element.nativeElement.value
    
  }
  ngAfterViewInit(){
    var strValue = this.element.nativeElement.innerText;
    this.element.nativeElement.innerText = strValue.toUpperCase();
  }

}

