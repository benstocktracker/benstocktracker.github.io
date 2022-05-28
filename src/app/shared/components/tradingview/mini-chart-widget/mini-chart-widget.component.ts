import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TradingviewService } from 'src/app/shared/services/tradingview.service';

@Component({
  selector: 'app-mini-chart-widget',
  templateUrl: './mini-chart-widget.component.html',
  styleUrls: ['./mini-chart-widget.component.css']
})
export class MiniChartWidgetComponent implements OnInit, AfterViewInit {
  @Input() symbol!: string;
  @ViewChild('miniChartWidget') miniChartWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const miniChart = this.tradingviewService.miniChartWidget(this.symbol);
    this.tradingviewService.renderWidget(this.miniChartWidget, miniChart);
  }
}
