import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  @Input() stockStats!: any;
  stockNews!: any;
  holdings!: any[];

  constructor() {}
  ngOnInit() {
    import(`../../../../assets/stocks/${this.stockStats.symbol}-news.json`).then(data => {
      this.stockNews = Object.values(data.default).sort((a: any, b: any) => b.providerPublishTime - a.providerPublishTime);
    });
  }
}
