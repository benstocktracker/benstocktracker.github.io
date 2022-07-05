import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickersWidgetComponent } from './tickers-widget.component';

describe('TickersWidgetComponent', () => {
  let component: TickersWidgetComponent;
  let fixture: ComponentFixture<TickersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickersWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
