import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/models/api.model';
import { MenuDialogComponent } from '../../components/menu-dialog/menu-dialog.component';
import { Menu } from '../../menu.model';
import { getMenuPage } from '../../store/menu.action';
import { getMenus, getPage, getIsLoading, getIsSaving, getError, getLastAdded } from '../../store/menu.selector';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  menus$: Observable<Menu[]>;
  pagination$: Observable<Page<any>>;
  isLoading$: Observable<boolean>;
  isSaving$: Observable<boolean>;
  error$: Observable<any>;
  lastAdded$: Observable<string>;

  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.menus$ = this.store.pipe(select(getMenus));
    this.pagination$ = this.store.pipe(select(getPage));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.isSaving$ = this.store.pipe(select(getIsSaving));
    this.error$ = this.store.pipe(select(getError));
    this.lastAdded$ = this.store.pipe(select(getLastAdded));

    const query = {
      pageSize: 5,
      pageNumber: 0
    };
    this.getPage(query);
  }

  openCreateDialog(): void {
    this.dialog.open(MenuDialogComponent, {
      data: {
        isSaving$: this.isSaving$,
        error$: this.error$
      }
    });
  }

  getPage(payload: any): void {
    const query = {
      ...payload,
      sort: 'createdDate desc'
    };
    this.store.dispatch(getMenuPage({ query }));
  }


  pageChange($event): void {
    this.getPage($event);
  }

}
