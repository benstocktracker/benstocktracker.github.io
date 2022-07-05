import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {
  holdings: string[] = [];
  showMiniChartWidget = false;

  constructor() { }

  ngOnInit(): void {
    import(`../../../../assets/stock-rows.json`).then(data => {
      this.holdings = Object.keys(data).slice(0, -1);
    });
  }

  handleToggle(event: any) {
    this.showMiniChartWidget = event.checked;
  }
}
