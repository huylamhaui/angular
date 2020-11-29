import { Action, createReducer, on } from '@ngrx/store';
import { CategoryType } from '../category.model';
import {
    loadListCategoryType,
    loadListCategoryTypeSuccess,
    loadListCategoryTypeFailure,
    createCategoryType,
    createCategoryTypeSuccess,
    createCategoryTypeFailure
} from './category.action';

export interface CategoryState {
    listCategoryType: CategoryType[];
    isLoading: boolean;
    isSaving: boolean;
    error: any;
}

export const initState: CategoryState = {
    listCategoryType: [],
    isLoading: false,
    isSaving: false,
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
    ),


    on(
        createCategoryType,
        (state, action) => ({
            ...state,
            isSaving: true,
            error: null
        })
    ),
    on(
        createCategoryTypeSuccess,
        (state, action) => ({
            ...state,
            isSaving: false,
            listCategoryType: [...state.listCategoryType, action.response],
            error: null
        })
    ),
    on(
        createCategoryTypeFailure,
        (state, action) => ({
            ...state,
            isSaving: false,
            error: action.error
        })
    )
);

export function categoryReducer(state: CategoryState, action: Action): any {
    return reducer(state, action);
}
