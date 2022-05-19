import { Component } from '@angular/core';
import { copyright } from 'src/configs/main.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  copyright = copyright;
  
  constructor() { }
}
