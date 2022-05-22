import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css']
})
export class PriceSliderComponent implements OnInit {
  @Input() min!: number;
  @Input() max!: number;
  @Input() currentPrice!: number;
  @Input() costAverage!: number;
  @Input() sharesOwned!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
