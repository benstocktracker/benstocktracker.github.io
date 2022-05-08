import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';
import { CrudService } from 'src/app/shared/services/crud.service';
import { editorConfig } from 'src/configs/editors.config'

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();
  columnDefs = ['ticker', 'sharesOwned', 'costAverage', 'costBasis', 'account', 'actions'];
  holdingForm = new FormGroup({});
  investmentAccounts = editorConfig.InvestmentAccounts;
  selectedRow: any = {};
  selectedRowIndex: number = -1;

  constructor(private crudService: CrudService, private fb: FormBuilder) { 
    this.holdingForm = this.fb.group({
      ticker: ['', Validators.required],
      sharesOwned: ['', Validators.required],
      costAverage: ['', Validators.required],
      account: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.crudService.load('holdings').subscribe((response: ApiResponse) => {
      if (response.status === 200) {
        const rows: object[] = [];
        Object.values(response.data).forEach((stock: any) => {
          for (let holding of stock) {
            holding.costBasis = holding.costAverage * holding.sharesOwned;
            rows.push(holding);
          }
        });
        this.dataSource.data = rows;
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  addHolding() {
    const data = this.dataSource.data;
    const newHolding = this.holdingForm.value;
    newHolding.costBasis = newHolding.sharesOwned * newHolding.costAverage;

    if (this.holdingForm.valid && this.selectedRowIndex === -1) {
      data.push(newHolding);
      this.dataSource.data = data;
      console.log('added!')
    } else if (this.holdingForm.valid && this.selectedRowIndex !== -1) {
      data[this.selectedRowIndex] = newHolding;
      this.dataSource.data = data;
      console.log('updated!')
    } else {
      console.log('Invalid holding');
    }
    this.holdingForm.reset();
    this.selectedRow = null;
    this.selectedRowIndex = -1;
    console.log(this.selectedRow, this.selectedRowIndex);
  }

  editHolding(holding: any, index: number) {
    this.selectedRow = {...holding};
    this.selectedRowIndex = index;
    delete this.selectedRow.costBasis;
    this.holdingForm.setValue(this.selectedRow);
  };

  deleteHolding(index: number) {
    const data = this.dataSource.data;
    data.splice(index, 1);
    this.dataSource.data = data;
  };

  saveHoldings() {
    const data = this.dataSource.data;
    const holdings: any = {}
    data.map((row: any) => {
      holdings[row.ticker] = holdings[row.ticker] ? [...holdings[row.ticker], row] : [row,];
    });
    console.log(holdings);
    this.crudService.dump('holdings', holdings).subscribe((response: ApiResponse) => {
      console.log(response.message);
    });
  };
}
