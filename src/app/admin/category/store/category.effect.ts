import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CategoryService } from '../category.service';
import { loadListCategoryType, loadListCategoryTypeFailure, loadListCategoryTypeSuccess } from './category.action';

@Injectable()
export class CategoryEffect {

    constructor(private actions$: Actions, private service: CategoryService) { }

    getListCategoryType$ = createEffect(() => this.actions$.pipe(
        ofType(loadListCategoryType),
        switchMap(
            acetion => this.service.getListCategoryType(acetion.filter).pipe(
                map(response => loadListCategoryTypeSuccess({ response })),
                catchError(error => of(loadListCategoryTypeFailure({ error })))
            )
        )
    ));

}
