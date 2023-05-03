import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private element: ElementRef) { }

   @HostListener('click')
   prevSlide(){
    console.log(this.element.nativeElement);
    let elem = this.element.nativeElement.parentElement.parentElement.children[0].children[0].children[0];
    let item = elem.getElementsByClassName("item");
    elem.prepend(item[item.length - 1]);
    console.log('====================================');
    console.log(elem);
    console.log(item);
    console.log('====================================');
   }

}
