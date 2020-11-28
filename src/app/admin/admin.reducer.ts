import { categoryReducer, CategoryState } from './category/store/category.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AdminState {
    categoryState: CategoryState;
}

export const adminReducer: ActionReducerMap<AdminState> = {
    categoryState: categoryReducer
};
