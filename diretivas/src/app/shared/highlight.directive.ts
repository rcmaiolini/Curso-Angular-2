import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
