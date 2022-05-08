import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TradingviewService } from 'src/app/shared/services/tradingview.service';

@Component({
  selector: 'app-symbol-profile-widget',
  templateUrl: './symbol-profile-widget.component.html',
  styleUrls: ['./symbol-profile-widget.component.css']
})
export class SymbolProfileWidgetComponent implements OnInit, AfterViewInit {
  @Input() symbol!: string;
  @ViewChild('symbolProfileWidget') symbolProfileWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    const profile = this.tradingviewService.symbolProfileWidget(this.symbol);
    this.tradingviewService.renderWidget(this.symbolProfileWidget, profile);
  }
}
