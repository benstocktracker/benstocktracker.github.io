import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFinancialsPanelComponent } from './stock-financials-panel.component';

describe('StockFinancialsPanelComponent', () => {
  let component: StockFinancialsPanelComponent;
  let fixture: ComponentFixture<StockFinancialsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockFinancialsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFinancialsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
