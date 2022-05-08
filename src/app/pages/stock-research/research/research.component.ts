import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';
import { StocksService } from 'src/app/shared/services/stocks.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  get searchField() { return this.searchForm.controls['searchField']};
  stockStats: any;
  stockNews: any;
  earningsDate: string = '';
  earningsEstimateValue: string = '';
  earningsEstimateSubtitle: string = '';
  statCardFontSize = '1.5rem';

  constructor (
    private stocksService: StocksService, 
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({'searchField': ['']});
  }

  showSnackBar(message: string, action='Dismiss') {
    return this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  searchTicker(event: any) {
    this.loadStats(this.searchField.value);
    this.loadNews(this.searchField.value);
    this.searchField.setValue('');
  }

  // TODO: create better response message for invalid symbol
  loadStats(symbol: string) {
    this.stocksService.loadStockResource(symbol, 'stats').subscribe((response: ApiResponse) => {
      if (response.status === 200) {
        this.stockStats = response.data;
      } else {
        this.showSnackBar(response.message!);
      }
    });
  }

  loadNews(symbol: string) {
    this.stocksService.loadStockResource(symbol, 'news').subscribe((response: ApiResponse) => {
      if (response.status === 200) {
        this.stockNews = Object.values(response.data).sort((a: any, b: any) => b.providerPublishTime - a.providerPublishTime);
      } else {
        this.showSnackBar(response.message!);
      }
    });
  }

  fetchStockData() {
    if (this.searchField.value) {
      this.showSnackBar(`Fetching data for ${this.searchField.value}`);
      this.stocksService.fetchOneTickerData(this.searchField.value).subscribe((response: ApiResponse) => {
        this.showSnackBar(response.message!);
        if (response.status === 200) {
          this.loadStats(this.searchField.value);
          this.loadNews(this.searchField.value);
        }
      });
    } else {
      this.showSnackBar('Please enter a symbol to search.');
    }
  }
}
