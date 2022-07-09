import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css'],
})
export class StockInfoComponent implements OnInit, AfterViewInit {
  @Input() symbol = '';
  stockInfo: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.symbol = this.symbol
      ? this.symbol.toUpperCase()
      : this.activatedRoute.snapshot.params['symbol'].toUpperCase();
      this.stockInfo = response['stocks'].default[this.symbol];
    });
  }

  ngAfterViewInit() {
    console.log(this.symbol);
    console.log(this.stockInfo);
  }
}
