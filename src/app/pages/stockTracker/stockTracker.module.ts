import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';

import { HoldingsComponent } from './holdings/holdings.component';
import { NewsComponent } from './news/news.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResearchComponent } from './research/research.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { StocksComponent } from './stocks/stocks.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

import { PortfolioRoutingModule } from './stockTracker-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HoldingsComponent,
    NewsComponent,
    PortfolioComponent,
    ResearchComponent,
    StockDetailsComponent,
    StockInfoComponent,
    StocksComponent,
    WatchlistComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortfolioRoutingModule,
    NgMaterialModule,
    SharedComponentsModule,
  ]
})
export class PortfolioModule { }
