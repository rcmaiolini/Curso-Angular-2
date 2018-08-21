import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploBgContentComponent } from './exemplo-bg-content.component';

describe('ExemploBgContentComponent', () => {
  let component: ExemploBgContentComponent;
  let fixture: ComponentFixture<ExemploBgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploBgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploBgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
