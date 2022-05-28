import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniChartWidgetComponent } from './mini-chart-widget.component';

describe('MiniChartWidgetComponent', () => {
  let component: MiniChartWidgetComponent;
  let fixture: ComponentFixture<MiniChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniChartWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
