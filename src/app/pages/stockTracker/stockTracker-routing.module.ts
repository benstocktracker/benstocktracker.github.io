import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StockInfoComponent } from './stock-info/stock-info.component';


const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'stock/:symbol', component: StockInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
