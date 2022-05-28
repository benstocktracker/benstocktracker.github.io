import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stock-chart-panel',
  templateUrl: './stock-chart-panel.component.html',
  styleUrls: ['./stock-chart-panel.component.css']
})
export class StockChartPanelComponent implements OnInit {
  @Input() symbol: string = 'AAPL';
  @Input() width: string = '100%';
  @Input() height: string = '450px';
  safeUrl: any;
  callCount = 0;
  style = {}

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.getChartUrl(this.symbol);
    this.style = {
      width: this.width,
      height: this.height
    }
  }

  getChartUrl(symbol: string) {
    this.callCount += 1;
    const url = 'https://wallmine.com/widgets/chart/' + symbol;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url); 
  }
}
