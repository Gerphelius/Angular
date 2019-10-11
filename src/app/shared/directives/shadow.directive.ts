import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('0 0 2vw black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(params: string) {
    this.elem.nativeElement.style.boxShadow = params;
  }
}
