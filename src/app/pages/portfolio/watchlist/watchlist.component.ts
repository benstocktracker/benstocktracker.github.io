import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WatchlistComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('singleQuoteWidget') singleQuoteWidget!: ElementRef;

  today = new Date();
  holdings: { [key: string]: any } = {};
  stocksData: any[] = [];
  dataSource = new MatTableDataSource<any>();
  columnDefs = [
    'symbol', '52 Week Price Range', 'yieldPercent',
    'payoutRatio', 'exDivDate', 'sector', 'analysis'
  ];
  headers = [
    'Symbol', '52 Week Price Range', 'Yield',
    'Payout Ratio', 'Ex-Div Date', 'Sector', 'Analysis'
  ];
  cells: Function[] = [
    (stock: any) => '',
    (stock: any) => '',
    (stock: any) => stock.yield > 0 ? `${stock.yieldPercent.toFixed(2)}% ($${stock.yield})` : 'N/A',
    (stock: any) => stock.yield > 0 ? `${stock.payoutRatio.toFixed(2)}%` : 'N/A',
    (stock: any) => ``,
    (stock: any) => stock.sector,
    (stock: any) => stock.analysis.toUpperCase(),
    (stock: any) => ''
  ]
  expandedRow!: any;

  showTickerWidget = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  getColColor(stock: any, index: number) {
    switch (index) {
      case 3:
        return stock.payoutRatio >= 50 ? 'tomato' : '#191919';
      case 6:
        return this.getAnalysisColor(stock.analysis);
      default:
        return '#191919';
    }
  }

  getAnalysisColor(value: string) {
    switch (value) {
      case 'strong buy': return 'forestgreen';
      case 'buy': return 'limegreen';
      case 'hold': return 'steelblue';
      case 'underperform': return 'orange';
      case 'sell': return 'tomato';
      default: return '#191919';
    }
  }

  getLogoURL(stock: any) { 
    const website = stock.stats.summaryProfile?.website.split('www.')[1] || 'clearbit.com';
    return `https://logo.clearbit.com/${website}?size=40&format=png`;
  }

  ngOnInit() {
    this.http.get('../../../../assets/watchlist-rows.json').subscribe((data: any) => {
      this.dataSource.data = Object.values(data);
      console.table(Object.values(data));
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  expandRow(row: any) {
    this.expandedRow = this.expandedRow === row ? null : row;
  }

  handleToggle(event: any) {
    this.showTickerWidget = event.checked;
  }
}

