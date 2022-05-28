import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-news-panel',
  templateUrl: './stock-news-panel.component.html',
  styleUrls: ['./stock-news-panel.component.css'],
})
export class StockNewsPanelComponent {
  @Input() news: any;
}
