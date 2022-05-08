import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNewsPanelComponent } from './stock-news-panel.component';

describe('StockNewsPanelComponent', () => {
  let component: StockNewsPanelComponent;
  let fixture: ComponentFixture<StockNewsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockNewsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockNewsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
