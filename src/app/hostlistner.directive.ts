import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistner]'
})
export class HostlistnerDirective {

  constructor(private el:ElementRef , private rnd:Renderer2) { 
  }
  @HostListener ('mouseover') fun(){
    if(this.el.nativeElement.style.background=="green"){return}
    this.rnd.setStyle(this.el.nativeElement,'background','yellow')

  }
  @HostListener ('mouseleave') fun1(){
    if(this.el.nativeElement.style.background=="green"){return}
    this.rnd.setStyle(this.el.nativeElement,'background','white')

  }
  @HostListener ('click') fun2(){
    this.rnd.setStyle(this.el.nativeElement,'background','green')

  }

}
