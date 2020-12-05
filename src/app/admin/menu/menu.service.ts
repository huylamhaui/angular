import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { ApiResponse, Page } from 'src/app/shared/models/api.model';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }


  // get page menu
  getPageMenu(payload): Observable<ApiResponse<Page<Menu>>> {
    let httpParams = new HttpParams();
    Object.keys(payload).forEach((key) => {
      httpParams = httpParams.append(key, payload[key]);
    });

    return this.http.get<ApiResponse<Page<Menu>>>(
      '/api/menu',
      {
        params: httpParams
      }
    ).pipe(
      catchError(error => throwError(error))
    );
  }



  // create menu
  createMenu(payload: Menu): Observable<ApiResponse<Menu>> {
    return this.http.post<ApiResponse<Menu>>(
      '/api/menu/create',
      payload
    ).pipe(
      catchError(error => throwError(error))
    );
  }

}
