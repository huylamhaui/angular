import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../shared/models/api.model';
import { AuthRequest, CheckTokenResponse } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(params: AuthRequest): Observable<ApiResponse<string>> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      httpParams = httpParams.append(key, params[key]);
    });

    return this.http.get<ApiResponse<string>>(
      '/api/auth', {
      params: httpParams
    }).pipe(
      catchError(error => throwError(error))
    );
  }


  checkToken(token: string): Observable<ApiResponse<CheckTokenResponse>> {
    let httpParams = new HttpParams();
    httpParams =  httpParams.append('token', token);

    return this.http.get<ApiResponse<CheckTokenResponse>>(
      '/api/auth/check-token', {
      params: httpParams
    }).pipe(
      catchError(error => throwError(error))
    );
  }
}
