import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChartPanelComponent } from './stock-chart-panel.component';

describe('StockChartPanelComponent', () => {
  let component: StockChartPanelComponent;
  let fixture: ComponentFixture<StockChartPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockChartPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChartPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
