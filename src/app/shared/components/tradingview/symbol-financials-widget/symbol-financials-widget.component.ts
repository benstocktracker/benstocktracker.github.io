import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TradingviewService } from 'src/app/shared/services/tradingview.service';

@Component({
  selector: 'app-symbol-financials-widget',
  templateUrl: './symbol-financials-widget.component.html',
  styleUrls: ['./symbol-financials-widget.component.css']
})
export class SymbolFinancialsWidgetComponent implements OnInit, AfterViewInit {
  @Input() symbol!: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() displayMode? = 'compact';
  @ViewChild('symbolFinancialsWidget') symbolFinancialsWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    const financials = this.tradingviewService.symbolFinancialsWidget(this.symbol, this.width, this.height, 'light', this.displayMode);
    this.tradingviewService.renderWidget(this.symbolFinancialsWidget, financials);
  }
}
