import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStatsPanelComponent } from './stock-stats-panel.component';

describe('StockStatsPanelComponent', () => {
  let component: StockStatsPanelComponent;
  let fixture: ComponentFixture<StockStatsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockStatsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStatsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
