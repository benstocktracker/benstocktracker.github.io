import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of, retry } from 'rxjs';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  backendServerUrl = "http://127.0.0.1:5000";
  httpOptions = {
    headers: new HttpHeaders()
      .set("content-type", "application/json")
      .set('Access-Control-Allow-Origin', '*')
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  error(error: HttpErrorResponse): Observable<ApiResponse> {
    let errorMessage = error.error instanceof ErrorEvent 
      ? error.error.message 
      : `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.log('backend service error:', errorMessage);
    this.snackBar.open(errorMessage, 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    return of({data: [], message: errorMessage, status: 500});
  }

  wrapHttpCall(call: Observable<any>): Observable<ApiResponse> {
    return call.pipe(
      retry<ApiResponse>(2),
      catchError(this.error),
    );
  }

  fetchOneTickerData(symbol: string): Observable<ApiResponse> {
    const endpoint = [this.backendServerUrl, 'stocks', 'fetch', symbol].join('/');
    const httpCall = this.http.post<ApiResponse>(endpoint, this.httpOptions);
    return this.wrapHttpCall(httpCall);
  }

  stocksData(action: 'fetch' | 'load'): Observable<ApiResponse> {
    const endpoint = [this.backendServerUrl, 'stocks', action].join('/'); 
    const httpCall = this.http.get<ApiResponse>(endpoint, this.httpOptions);
    return this.wrapHttpCall(httpCall);
  }

  loadStockResource(symbol: string, resource: string): Observable<ApiResponse> {
    const endpoint = [this.backendServerUrl, 'stocks', 'load', symbol, resource].join('/');
    const httpCall = this.http.post<ApiResponse>(endpoint, this.httpOptions);
    return this.wrapHttpCall(httpCall);
  }

  loadPortfolioNews(): Observable<ApiResponse> {
    const endpoint = [this.backendServerUrl, 'stocks', 'load', 'portfolionews'].join('/');
    const httpCall = this.http.get<ApiResponse>(endpoint, this.httpOptions);
    return this.wrapHttpCall(httpCall);
  }

  loadHoldings(): any {
    const httpCall = this.http.get<object>("assets/stocks/holdings.json");
    return this.wrapHttpCall(httpCall);
  }
}
