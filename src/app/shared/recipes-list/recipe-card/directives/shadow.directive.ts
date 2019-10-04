import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('shadow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('shadow');
  }

  private highlight(className: string) {
    this.elem.nativeElement.classList.toggle(className);
  }

}
