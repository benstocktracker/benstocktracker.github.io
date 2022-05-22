import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

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
    'symbol', 'sharesOwned', 'costAverage', 'costBasis', 'marketValue',
    'gainLoss', 'glPercent', 'yield', 'yieldPercent', 'yieldOnCost',
    'payoutRatio', 'exDivDate', 'sector', 'analysis', 'actions'
  ];
  headers = [
    'Symbol', 'Shares Owned', 'Cost Average', 'Cost Basis', 'Market Value',
    'Gain', 'Gain %', 'Yield', 'Yield %', 'Yield on Cost',
    'Payout Ratio', 'Ex-Div Date', 'Sector', 'Analysis', ''
  ];
  cells: Function[] = [
    (stock: any) => stock.symbol,
    (stock: any) => stock.sharesOwned,
    (stock: any) => `$${stock.costAverage.toFixed(2)}`,
    (stock: any) => `$${stock.costBasis.toFixed(2)}`,
    (stock: any) => `$${stock.marketValue.toFixed(2)}`,
    (stock: any) => `$${stock.gainLoss.toFixed(2)}`,
    (stock: any) => `${stock.glPercent.toFixed(2)}%`,
    (stock: any) => `$${stock.yield.toFixed(2)}`,
    (stock: any) => `${stock.yieldPercent.toFixed(2)}%`,
    (stock: any) => `${stock.yieldOnCost.toFixed(2)}%`,
    (stock: any) => `${stock.payoutRatio.toFixed(2)}%`,
    (stock: any) => `${stock.exDivDate}`,
    (stock: any) => stock.sector,
    (stock: any) => stock.analysis.toUpperCase(),
    (stock: any) => ''
  ]
  footerRow: Function[] = [
    () => '',  // symbol
    () => '',  // shares owned
    () => '',  // cost average
    () => `$${this.dataSource.data.map(t => t.sharesOwned * t.costAverage).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // cost basis
    () => `$${this.dataSource.data.map(t => t.sharesOwned * t.marketPrice).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // market value
    () => `$${this.dataSource.data.map(t => (t.marketPrice-t.costAverage) * t.sharesOwned).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // gain / lost
    () => '',  // gain / loss %
    () => `$${this.dataSource.data.map(t => t.yield * t.sharesOwned).reduce((acc, value) => acc + value, 0).toFixed(2)}`,  // yield
    () => ``,  // yield %
    () => '',  // yield on cost
    () => '',  // payout ratio
    () => '',  // ex-div date
    () => '',  // sector
    () => '',  // analysis
    () => '',  // actions
  ]
  expandedRow!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  getColColor(stock: any, index: number) {
    switch (index) {
      case 5:
        return this.cells[index](stock)[1] === '-' ? 'tomato' : 'forestgreen';
      case 6:
        return this.cells[index](stock)[0] === '-' ? 'tomato' : 'forestgreen';
      case 7:
      case 8:
        return this.cells[index](stock) !== '0%' ? 'steelblue' : '#191919';
      case 10:
        return stock.payoutRatio >= 50 ? 'tomato' : '#191919';
      case 13:
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

  ngOnInit() {
    // this.activatedRoute.data.subscribe(response => {
    //   this.holdings = response['stocks'];
    // });
    import(`../../../../assets/stock-rows.json`).then(data  => { 
      this.dataSource.data = Object.values(data.default);
    });
    this.http.get('../../../../assets/holdings.csv', {responseType: 'text'}).subscribe((data: string) => { 
      const stocklist_data = data.split(/\r\n|\n/).slice(0, -1);
      const header = stocklist_data.shift()!.split(',');
      const stocklist = stocklist_data.map(row => {
        row = row.replace('\"', '"');
        return row.split(',');
      });
      console.log(header)
      console.log(stocklist)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showSnackBar(message: string, action='Dismiss') {
    return this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  expandRow(row: any) {
    this.expandedRow = this.expandedRow === row ? null : row;
  }
}
