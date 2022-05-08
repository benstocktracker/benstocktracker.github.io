import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  pageX = window.innerWidth;
  pageY = window.innerHeight;
  mouseY = 0;
  mouseX = 0;
  transform = 'translate(-50%, -45%)';

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    this.mouseY = e.pageY;
    const yAxis = (this.pageY / 2 - this.mouseY) / this.pageY * 300;
    this.mouseX = e.pageX / -this.pageX;
    const xAxis = -this.mouseX * 100 - 100;
    this.transform = 'translate('+ xAxis +'%,-'+ yAxis +'%)'; 
  }

  constructor() { }
}
