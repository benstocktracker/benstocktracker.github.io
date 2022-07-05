import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
})
export class ResearchComponent implements OnInit {
  searchForm: UntypedFormGroup = new UntypedFormGroup({});
  get searchField() {
    return this.searchForm.controls['searchField'];
  }
  stockStats: any;
  stockNews: any;
  earningsDate: string = '';
  earningsEstimateValue: string = '';
  earningsEstimateSubtitle: string = '';
  statCardFontSize = '1.5rem';
  searchSymbol = '';
  symbols = `[
    {
      "description": "S&P 500",
      "proName": "FOREXCOM:SPXUSD"
    },
    {
      "description": "NASDAQ",
      "proName": "NASDAQ:IXIC"
    },
    {
      "description": "Dow Jones",
      "proName": "DJ:DJA"
    },
    {
      "description": "Bitcoin",
      "proName": "CRYPTOCAP:BTC"
    },
    {
      "description": "Ethereum",
      "proName": "CRYPTOCAP:ETH"
    },
    {
      "description": "Dogecoin",
      "proName": "CRYPTOCAP:DOGE"
    }
  ]`

  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  ngOnInit() {
    this.searchForm = this.fb.group({ searchField: [''] });
  }

  searchTicker() {
    this.searchSymbol = this.searchField.value;
    this.searchField.setValue('');
    const stockPage = this.router.serializeUrl(this.router.createUrlTree([`/stock/${this.searchSymbol}`]));
    window.open(stockPage, '_blank');
  }
}
