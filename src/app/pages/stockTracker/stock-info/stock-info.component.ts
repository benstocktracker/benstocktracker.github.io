import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css'],
})
export class StockInfoComponent implements OnInit {
  @Input() symbol = '';
  stockInfo: any;
  exchange = ''
  wallmineLink = 'https://wallmine.com/'
  finvizLink = 'https://finviz.com/quote.ashx?t=';
  hyperchartsLink = 'https://hypercharts.co/';
  tradingviewLink = 'https://www.tradingview.com/symbols/'

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.symbol = this.symbol
      ? this.symbol.toUpperCase()
        : this.activatedRoute.snapshot.params['symbol'].toUpperCase();
      this.stockInfo = response['stocks'].default[this.symbol];
      this.exchange = this.stockInfo.stats.price.exchangeName;
      this.wallmineLink += this.exchange + '/' + this.symbol;
      this.finvizLink += this.symbol;
      this.hyperchartsLink += this.symbol;
      this.tradingviewLink += this.exchange + '-' + this.symbol;
    });
  }
}
