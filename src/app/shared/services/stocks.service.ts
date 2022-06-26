import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, Observable, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  httpOptions = {
    headers: new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*'),
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  error(error: HttpErrorResponse): Observable<any> {
    let errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.log('backend service error:', errorMessage);
    this.snackBar.open(errorMessage, 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    return of({ data: [], message: errorMessage, status: 500 });
  }

  wrapHttpCall(call: Observable<any>): Observable<any> {
    return call.pipe(retry<any>(2), catchError(this.error));
  }

  loadHoldings(): any {
    const httpCall = this.http.get<object>('assets/holdings.json');
    return this.wrapHttpCall(httpCall);
  }
}
