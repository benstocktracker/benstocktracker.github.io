import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { StocksComponent } from './stocks/stocks.component';
import { EditorComponent } from './editor/editor.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    StocksComponent,
    EditorComponent,
    StockDetailsComponent,
    HoldingsComponent,
    PortfolioComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortfolioRoutingModule,
    NgMaterialModule,
    SharedComponentsModule
  ]
})
export class PortfolioModule { }
