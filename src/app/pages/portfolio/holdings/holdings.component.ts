import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';
import { StocksService } from 'src/app/shared/services/stocks.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();
  columnDefs = ['ticker', 'sharesOwned', 'costAverage', 'costBasis', 'account'];

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.stocksService.loadHoldings().subscribe((holdings: any) => {
      const rows: object[] = [];
      Object.values(holdings).forEach((stock: any) => {
        for (let holding of stock) {
          holding.costBasis = holding.costAverage * holding.sharesOwned;
          rows.push(holding);
        }
      });
      this.dataSource.data = rows;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }
}
