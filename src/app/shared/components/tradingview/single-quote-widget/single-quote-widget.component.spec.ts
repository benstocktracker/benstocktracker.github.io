import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuoteWidgetComponent } from './single-quote-widget.component';

describe('SingleQuoteWidgetComponent', () => {
  let component: SingleQuoteWidgetComponent;
  let fixture: ComponentFixture<SingleQuoteWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQuoteWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuoteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
