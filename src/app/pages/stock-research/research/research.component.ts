import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  searchTicker(event: any) {}
}
