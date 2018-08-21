import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  private backgroundColor: string;

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    // codigo extra se necessario
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = 'yellow';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = 'white';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
  }

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer
  ) { }

}
