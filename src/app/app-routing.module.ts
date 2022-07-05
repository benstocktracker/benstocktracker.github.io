import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StocksDataResolver } from './pages/stockTracker/data.resolver';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./pages/stockTracker/stockTracker.module').then(m => m.PortfolioModule),
    resolve: {stocks: StocksDataResolver}
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
