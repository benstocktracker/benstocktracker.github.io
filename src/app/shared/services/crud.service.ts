import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of, retry } from 'rxjs';
import { ApiResponse } from 'src/app/shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  backendServerUrl = "http://127.0.0.1:5000";
  httpOptions = {
    headers: new HttpHeaders()
      .set("content-type", "application/json")
      .set('Access-Control-Allow-Origin', '*')
  };
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  error(error: HttpErrorResponse): Observable<ApiResponse> {
    let errorMessage = error.error instanceof ErrorEvent 
      ? error.error.message 
      : `Error Code: ${error.status}\nMessage: ${error.message}`;
    this.showSnackBar(errorMessage);
    return of({data: [], message: errorMessage, status: 500});
  }

  wrapHttpCall(call: Observable<any>): Observable<ApiResponse> {
    return call.pipe(
      retry<ApiResponse>(2),
      catchError(this.error),
    );
  }

  load(resource: string): Observable<ApiResponse> {
    const httpCall = this.http.get<ApiResponse>(
      [this.backendServerUrl, 'load', resource].join('/'), this.httpOptions
    );
    return this.wrapHttpCall(httpCall);
  }

  dump(resource: string, data: any): Observable<ApiResponse> {
    const httpCall = this.http.post<ApiResponse>(
      [this.backendServerUrl, 'dump', resource].join('/'), data, this.httpOptions
    );
    return this.wrapHttpCall(httpCall);
  }

  loadHoldings(): any {
    const httpCall = this.http.get<object>("assets/holdings.json");
    return this.wrapHttpCall(httpCall);
  }
}
