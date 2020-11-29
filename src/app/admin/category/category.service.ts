import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryType } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getListCategoryType(filter: any): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>('/api/categories');
  }
}
