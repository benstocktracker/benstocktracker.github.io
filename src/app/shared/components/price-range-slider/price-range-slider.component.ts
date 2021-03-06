import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-range-slider',
  templateUrl: './price-range-slider.component.html',
  styleUrls: ['./price-range-slider.component.css']
})
export class PriceRangeSliderComponent implements OnInit {
  @Input() min!: string;
  @Input() max!: string;
  @Input() currentPrice!: string;
  @Input() costAverage!: number;
  @Input() shares!: number;
  @Input() showHolding: boolean = true;
  sliderColor: string = '';

  constructor() { }

  ngOnInit(): void {
    let mid = (+this.min + +this.max) / 2;
    this.sliderColor = +this.currentPrice > mid ? 'primary' : 'warn';
  }

  getColor() { 
    return this.costAverage > +this.min ? 'tomato' : 'forestgreen';
  }
}
