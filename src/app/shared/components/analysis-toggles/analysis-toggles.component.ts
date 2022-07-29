import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-toggles',
  templateUrl: './analysis-toggles.component.html',
  styleUrls: ['./analysis-toggles.component.css']
})
export class AnalysisTogglesComponent implements OnInit {
  @Input() analysis!: string;
  @Input() costAverage!: number;
  @Input() marketPrice!: number;
  @Input() fiftyTwoWeekLow!: number;
  winLose = '';

  constructor() { }

  ngOnInit(): void {
    this.winLose = this.costAverage < this.fiftyTwoWeekLow && this.costAverage < this.marketPrice ? 'Winner' : 'Loser';
  }

  getAnalysisColor() {
    switch (this.analysis.toLowerCase()) {
      case 'strong buy': return 'forestgreen';
      case 'buy': return 'limegreen';
      case 'hold': return 'steelblue';
      case 'underperform': return 'orange';
      case 'sell': return 'tomato';
      default: return '#191919';
    }
  }

  getWinLoseColor() { 
    return this.winLose === 'Loser' ? 'tomato' : 'forestgreen';
  }
}
