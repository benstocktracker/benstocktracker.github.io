import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css']
})
export class PriceSliderComponent implements OnInit {
  @Input() min!: string;
  @Input() max!: string;
  @Input() currentPrice!: string;
  @Input() costAverage!: number;
  @Input() sharesOwned!: number;
  color: string = '';

  constructor() { }

  ngOnInit(): void {
    let mid = (+this.min + +this.max) / 2;
    this.color = +this.currentPrice > mid ? 'primary' : 'warn';
  }
}
