import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TradingviewService } from 'src/app/shared/services/tradingview.service';

@Component({
  selector: 'app-single-quote-widget',
  templateUrl: './single-quote-widget.component.html',
  styleUrls: ['./single-quote-widget.component.css']
})
export class SingleQuoteWidgetComponent implements OnInit, AfterViewInit {
  @Input() symbol!: string;
  @ViewChild('singleQuoteWidget') singleQuoteWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const singleQuote = this.tradingviewService.singleQuoteWidget(this.symbol);
    this.tradingviewService.renderWidget(this.singleQuoteWidget, singleQuote);
  }
}
