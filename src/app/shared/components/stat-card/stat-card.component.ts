import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {
  @Input() icon: string = '';
  @Input() value: number | string = 0;
  @Input() subtitle: string = '';
  @Input() currency: boolean = false;
  @Input() percentage: boolean = false;
  @Input() color: string = '#191919';
  @Input() fontSize: string = '2rem';

  constructor() { }

  getStyle() {
    return {
      'color': this.color,
      'font-size': this.fontSize,
    }
  }
}
