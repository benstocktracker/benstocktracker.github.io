import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {
  @Input() symbol = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.symbol = this.symbol ? this.symbol : this.activatedRoute.snapshot.params['symbol'];
  }

}
