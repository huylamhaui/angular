import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminState } from 'src/app/admin/admin.reducer';
import { CategoryType } from '../../category.model';
import { loadListCategoryType } from '../../store/category.action';
import { getIsLoading, getListCategoryType } from '../../store/category.selector';

@Component({
  selector: 'app-category-type-page',
  templateUrl: './category-type-page.component.html',
  styleUrls: ['./category-type-page.component.scss']
})
export class CategoryTypePageComponent implements OnInit {

  categoryTypeList$: Observable<CategoryType[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AdminState>) { }

  ngOnInit(): void {
    this.categoryTypeList$ = this.store.pipe(select(getListCategoryType));
    this.isLoading$ = this.store.pipe(select(getIsLoading));

    this.store.dispatch(loadListCategoryType({ filter: {} }));
  }

}
