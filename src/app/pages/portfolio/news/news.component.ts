import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any[] = [];

  constructor() {}
  ngOnInit() {
    import(`../../../../assets/stock-news.json`).then(data => {
      this.news = Object.values(data.default).sort((a: any, b: any) => b.providerPublishTime - a.providerPublishTime);
    });
  }
}
