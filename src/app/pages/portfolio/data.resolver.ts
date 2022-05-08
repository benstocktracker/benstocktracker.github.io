import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {  Observable } from 'rxjs';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';
import { StocksService } from 'src/app/shared/services/stocks.service';


@Injectable({
  providedIn: 'root'
})
export class StocksDataResolver implements Resolve<ApiResponse> {
  constructor(private stocksService: StocksService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApiResponse> {
    return this.stocksService.loadHoldings();
  }
} 