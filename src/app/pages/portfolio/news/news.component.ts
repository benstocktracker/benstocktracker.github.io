import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';
import { CrudService } from 'src/app/shared/services/crud.service';
import { StocksService } from 'src/app/shared/services/stocks.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any[] = [];

  constructor(private crudService: CrudService, private stocksService: StocksService) {}

  ngOnInit(): void {
    this.stocksService.loadPortfolioNews().subscribe((response: ApiResponse) => {
      if (response.status === 200) {
        this.news = response.data;
      }
    });
  }
}
