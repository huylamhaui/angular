import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminState } from 'src/app/admin/admin.reducer';
import { createCategoryType } from '../../store/category.action';
import { getIsSaving } from '../../store/category.selector';

@Component({
  selector: 'app-create-category-type',
  templateUrl: './create-category-type.component.html',
  styleUrls: ['./create-category-type.component.scss']
})
export class CreateCategoryTypeComponent implements OnInit {

  isSaving$: Observable<boolean>;

  constructor(private store: Store<AdminState>) { }

  ngOnInit(): void {
    this.isSaving$ = this.store.pipe(select(getIsSaving));
  }


  onSubmitForm($event): void {
    console.log($event);
    this.store.dispatch(createCategoryType({ payload: $event }));
  }

}
