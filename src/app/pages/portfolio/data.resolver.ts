import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StocksService } from 'src/app/shared/services/stocks.service';

@Injectable({
  providedIn: 'root'
})
export class StocksDataResolver implements Resolve<any> {
  constructor(private stocksService: StocksService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return import(`../../../assets/stock-rows.json`);
  }
} 