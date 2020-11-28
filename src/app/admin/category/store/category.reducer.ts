import { Action, createReducer, on } from '@ngrx/store';
import { CategoryType } from '../category.model';
import {
    loadListCategoryType,
    loadListCategoryTypeSuccess,
    loadListCategoryTypeFailure
} from './category.action';

export interface CategoryState {
    listCategoryType: CategoryType[];
    isLoading: boolean;
    error: any;
}

export const initState: CategoryState = {
    listCategoryType: [],
    isLoading: false,
    error: null
};


const reducer = createReducer(
    initState,
    on(
        loadListCategoryType,
        (state, action) => ({
            ...state,
            isLoading: true,
            error: null
        })
    ),
    on(
        loadListCategoryTypeSuccess,
        (state, action) => ({
            ...state,
            isLoading: false,
            error: null,
            listCategoryType: action.response
        })
    ),
    on(
        loadListCategoryTypeFailure,
        (state, action) => ({
            ...state,
            isLoading: false,
            error: action.error
        })
    )
);

export function categoryReducer(state: CategoryState, action: Action): any {
    return reducer(state, action);
}
