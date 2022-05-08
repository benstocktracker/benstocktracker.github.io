import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolFinancialsWidgetComponent } from './symbol-financials-widget.component';

describe('SymbolFinancialsWidgetComponent', () => {
  let component: SymbolFinancialsWidgetComponent;
  let fixture: ComponentFixture<SymbolFinancialsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymbolFinancialsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolFinancialsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
