import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';
import { CrudService } from 'src/app/shared/services/crud.service';
import { StocksService } from 'src/app/shared/services/stocks.service';

@Component({
  selector: 'app-stocks-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  @Input() stockStats!: any;
  stockNews!: any;
  holdings!: any[];
  callCount = 0;

  constructor(private stocksService: StocksService, private crudService: CrudService) {}

  ngOnInit() {
    this.stocksService.loadStockResource(this.stockStats.symbol, 'news').subscribe(data => {
      this.stockNews = Object.values(data.data).sort((a: any, b: any) => b.providerPublishTime - a.providerPublishTime);
    });
    this.crudService.load('holdings').subscribe((response: ApiResponse) => {
      if (response.status === 200) {
        this.holdings = response.data[this.stockStats.symbol]
      }
    })
  }
}
