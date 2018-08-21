import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  _hasView = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set ngElse(condition: boolean) {
    if (!condition && this._hasView) {
      this._hasView = false;
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else if (condition && !this._hasView) {
      this._hasView = true;
      this.viewContainerRef.clear();
    }
  }
}
