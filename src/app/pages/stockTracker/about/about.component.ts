import { Component, OnInit } from '@angular/core';
import { version } from 'src/configs/main.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  version = version;

  constructor() { }

  ngOnInit(): void {
  }

}
