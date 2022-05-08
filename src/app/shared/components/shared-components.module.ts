import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { StatCardComponent } from './stat-card/stat-card.component';
import { StockChartPanelComponent } from './stock-chart-panel/stock-chart-panel.component';
import { StockFinancialsPanelComponent } from './stock-financials-panel/stock-financials-panel.component';
import { StockNewsPanelComponent } from './stock-news-panel/stock-news-panel.component';
import { StockProfilePanelComponent } from './stock-profile-panel/stock-profile-panel.component';
import { StockStatsPanelComponent } from './stock-stats-panel/stock-stats-panel.component';
import { SingleQuoteWidgetComponent } from './tradingview/single-quote-widget/single-quote-widget.component';
import { SymbolProfileWidgetComponent } from './tradingview/symbol-profile-widget/symbol-profile-widget.component';
import { SymbolFinancialsWidgetComponent } from './tradingview/symbol-financials-widget/symbol-financials-widget.component';


const components = [
  StatCardComponent,
  StockChartPanelComponent,
  StockFinancialsPanelComponent,
  StockNewsPanelComponent,
  StockProfilePanelComponent,
  StockStatsPanelComponent,
  SingleQuoteWidgetComponent,
  SymbolProfileWidgetComponent,
  SymbolFinancialsWidgetComponent,
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    NgMaterialModule
  ]
})
export class SharedComponentsModule { }
