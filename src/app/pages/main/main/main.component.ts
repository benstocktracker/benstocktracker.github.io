import { Component } from '@angular/core';
import { version } from 'src/configs/main.config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  version = version;
  constructor() {}
}
