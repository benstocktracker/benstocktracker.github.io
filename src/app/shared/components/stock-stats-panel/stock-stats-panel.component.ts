import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TradingviewService } from '../../services/tradingview.service';

@Component({
  selector: 'app-stock-stats-panel',
  templateUrl: './stock-stats-panel.component.html',
  styleUrls: ['./stock-stats-panel.component.css']
})
export class StockStatsPanelComponent implements OnInit {
  @Input() stockStats!: any;
  @Input() fontSize: string = '1.5rem';
  earningsEstimateValue: string = '';
  earningsEstimateSubtitle: string = '';
  earningsDate: string = '';

  constructor() { }

  ngOnInit() {
    this.earningsEstimateValue = this.stockStats.earnings.earningsChart.currentQuarterEstimate;
    this.earningsEstimateSubtitle = `
      ${this.stockStats.earnings.earningsChart.currentQuarterEstimateDate} 
      ${this.stockStats.earnings.earningsChart.currentQuarterEstimateYear}
      Est (EPS)
    `;
    this.earningsDate = `
      ${new Date(this.stockStats.calendarEvents.earnings.earningsDate[0] * 1000).toLocaleDateString('en-US')} - 
      ${new Date(this.stockStats.calendarEvents.earnings.earningsDate[1] * 1000).toLocaleDateString('en-US')}
    `;
  }
}
