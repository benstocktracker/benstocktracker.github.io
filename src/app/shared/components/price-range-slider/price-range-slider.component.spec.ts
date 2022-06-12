import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangeSliderComponent } from './price-range-slider.component';

describe('PriceRangeSliderComponent', () => {
  let component: PriceRangeSliderComponent;
  let fixture: ComponentFixture<PriceRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceRangeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
