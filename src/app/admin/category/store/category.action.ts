import { createAction, props } from '@ngrx/store';
import { CategoryType } from '../category.model';

export const loadListCategoryType = createAction(
    '[Category Page] load list category',
    props<{ filter: any }>()
);

export const loadListCategoryTypeSuccess = createAction(
    '[Category api] load list category success',
    props<{ response: CategoryType[] }>()
);

export const loadListCategoryTypeFailure = createAction(
    '[Category api] load list category type failure',
    props<{ error: any }>()
);
