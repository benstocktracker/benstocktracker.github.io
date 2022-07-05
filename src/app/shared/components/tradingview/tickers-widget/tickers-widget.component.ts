import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TradingviewService } from 'src/app/shared/services/tradingview.service';

@Component({
  selector: 'app-tickers-widget',
  templateUrl: './tickers-widget.component.html',
  styleUrls: ['./tickers-widget.component.css']
})
export class TickersWidgetComponent implements OnInit, AfterViewInit{
  @Input() symbols = `[
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "title": "NASDAQ",
      "proName": "NASDAQ:IXIC"
    },
    {
      "title": "DJI",
      "proName": "DJ:DJI"
    }
  ]`
  @ViewChild('tickersWidget') tickersWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const tickers = this.tradingviewService.tickersWidget(this.symbols);
    this.tradingviewService.renderWidget(this.tickersWidget, tickers);
  }
}
