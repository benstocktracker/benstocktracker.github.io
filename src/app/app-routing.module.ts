import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StocksDataResolver } from './pages/portfolio/data.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'portfolio', 
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
    resolve: {stocks: StocksDataResolver}
  },
  {
    path: 'research', 
    loadChildren: () => import('./pages/stock-research/stock-research.module').then(m => m.StockResearchModule),
  },
  {
    path: '**', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
