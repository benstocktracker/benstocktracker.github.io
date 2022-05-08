import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-profile-panel',
  templateUrl: './stock-profile-panel.component.html',
  styleUrls: ['./stock-profile-panel.component.css']
})
export class StockProfilePanelComponent implements OnInit {
  @Input() symbol: any;
  @Input() profile: any;

  constructor() { }

  ngOnInit(): void {
  }

}
