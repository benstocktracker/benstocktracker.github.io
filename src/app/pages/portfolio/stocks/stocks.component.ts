import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StocksComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('singleQuoteWidget') singleQuoteWidget!: ElementRef;

  today = new Date();
  holdings: { [key: string]: any } = {};
  stocksData: any[] = [];
  dataSource = new MatTableDataSource<any>();
  columnDefs = [
    'symbol', 'Cost Average & 52 Week Price Range', 'marketValue',
    'profit', 'yieldPercent', 'dividendIncome', 'yieldOnCost',
    'payoutRatio', 'exDivDate', 'sector', 'analysis'
  ];
  headers = [
    'Symbol', 'Cost Average & 52 Week Price Range', 'Market Value',
    'Profit', 'Yield', 'Dividend Income', 'Yield on Cost',
    'Payout Ratio', 'Ex-Div Date', 'Sector', 'Analysis'
  ];
  cells: Function[] = [
    (stock: any) => '',
    (stock: any) => '',
    (stock: any) => `$${stock.marketValue.toFixed(2)}`,
    (stock: any) => `$${stock.profit.toFixed(2)}`,
    (stock: any) => stock.yield > 0 ? `${stock.yieldPercent.toFixed(2)}% ($${stock.yield.toFixed(2)})` : 'N/A',
    (stock: any) => stock.yield > 0 ? `$${stock.dividendIncome.toFixed(2)}` : 'N/A',
    (stock: any) => stock.yield > 0 ? `${stock.yieldOnCost.toFixed(2)}%` : 'N/A',
    (stock: any) => stock.yield > 0 ? `${stock.payoutRatio.toFixed(2)}%` : 'N/A',
    (stock: any) => ``,
    (stock: any) => stock.sector,
    (stock: any) => stock.analysis.toUpperCase(),
    (stock: any) => ''
  ]
  footerRow: Function[] = [
    () => '',
    () => `$${this.dataSource.data.map(t => t.costBasis).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // cost basis
    () => `$${this.dataSource.data.map(t => t.marketValue).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // market value
    () => `$${this.dataSource.data.map(t => t.profit).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // unrealized gain / loss
    () => '',
    () => `$${this.dataSource.data.map(t => t.dividendIncome).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // dividend Income
    () => ``,
    () => '',
    () => '',
    () => '',
    () => '',
    () => '',
    () => '',
  ]
  expandedRow!: any;

  showTickerWidget = false;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  getColColor(stock: any, index: number) {
    switch (index) {
      case 3:
        return this.cells[index](stock)[1] === '-' ? 'tomato' : 'forestgreen';
      case 6:
        return stock.yield > 0 ? 'steelblue' : '#191919';
      case 7:
        return stock.payoutRatio >= 50 ? 'tomato' : '#191919';
      case 10:
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
    this.activatedRoute.data.subscribe(response => {
      this.dataSource.data = Object.values(response['stocks'].default);

      // this.http.get('../../../../assets/holdings.csv', {responseType: 'text'}).subscribe((data: string) => { 
      //   const stocklist_data = data.split(/\r\n|\n/).slice(0, -1);
      //   const header = stocklist_data.shift()!.split(',');
      //   const stocklist = stocklist_data.map(row => {
      //     row = row.replace('\"', '"');
      //     return row.split(',');
      //   });
      // })
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
