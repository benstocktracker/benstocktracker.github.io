import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { editorConfig } from 'src/configs/editors.config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  stockForm: FormGroup = new FormGroup({});
  get symbol() { return this.stockForm.controls['symbol']};
  get sharesOwned() { return this.stockForm.controls['sharesOwned']};
  get costAverage() { return this.stockForm.controls['costAverage']};
  get account() { return this.stockForm.controls['account']};

  accountOptions = editorConfig.InvestmentAccounts;
  editorMode = this.data.symbol ? 'Edit Stock' : 'Add Stock';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      symbol: [this.data.symbol || '', Validators.required],
      sharesOwned: [this.data.sharesOwned || '', Validators.required],
      costAverage: [this.data.costAverage || '', Validators.required],
      account: [this.data.account || '', Validators.required],
    });
  }
}
