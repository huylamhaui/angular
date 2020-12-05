import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MenuDialogComponent } from '../components/menu-dialog/menu-dialog.component';
import { MenuService } from '../menu.service';
import { createMenu, createMenuFailure, createMenuSuccess, getMenuPage, getMenuPageFailure, getMenuPageSuccess } from './menu.action';

@Injectable()
export class MenuEffect {

    constructor(
        public actions$: Actions, private service: MenuService,
        private dialog: MatDialog
    ) { }




    getMenuPage$ = createEffect(
        () => this.actions$.pipe(
            ofType(getMenuPage),
            switchMap(
                action => this.service.getPageMenu(action.query).pipe(
                    map(response => {
                        if (response.code === 200) {
                            return getMenuPageSuccess({ response });
                        } else {
                            return getMenuPageFailure({ error: response });
                        }
                    }),
                    catchError(error => of(getMenuPageFailure({ error })))
                )
            )
        )
    );






    createMenu$ = createEffect(
        () => this.actions$.pipe(
            ofType(createMenu),
            switchMap(
                action => this.service.createMenu(action.payload).pipe(
                    map(response => {
                        if (response.code === 200) {
                            this.dialog.closeAll();
                            return createMenuSuccess({ response });
                        } else {
                            return createMenuFailure({ error: response });
                        }
                    }),
                    catchError(error => of(createMenuFailure({ error })))
                )
            )
        )
    );




}
