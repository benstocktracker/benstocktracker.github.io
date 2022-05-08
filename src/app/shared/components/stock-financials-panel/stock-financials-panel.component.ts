import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-financials-panel',
  templateUrl: './stock-financials-panel.component.html',
  styleUrls: ['./stock-financials-panel.component.css']
})
export class StockFinancialsPanelComponent implements OnInit {
  @Input() symbol!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
