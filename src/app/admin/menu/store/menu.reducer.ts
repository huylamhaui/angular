import { Action, createReducer, on } from '@ngrx/store';
import { Page } from 'src/app/shared/models/api.model';
import { Menu } from '../menu.model';
import { createMenu, createMenuFailure, createMenuSuccess, getMenuPage, getMenuPageFailure, getMenuPageSuccess } from './menu.action';

export interface MenuState {
    menus: Menu[];
    page: Page<Menu>;
    isLoading: boolean;
    isSaving: boolean;
    error?: any;
    lastAdded?: string;
}


const initState: MenuState = {
    menus: [],
    page: {
        content: [],
        empty: false,
        first: true,
        last: true,
        pageable: {
            pageNumber: 0,
            pageSize: 5,
            sort: null
        },
        totalElements: 0,
        totalPages: 0
    },
    isLoading: false,
    isSaving: false,
    error: null,
    lastAdded: null
};


const reducer = createReducer(
    initState,
    on(
        getMenuPage,
        (state, action) => ({
            ...state,
            isLoading: true,
            error: null,
            lastAdded: null
        })
    ),
    on(
        getMenuPageFailure,
        (state, { error }) => ({
            ...state,
            isLoading: false,
            error
        })
    ),
    on(
        getMenuPageSuccess,
        (state, { response }) => ({
            ...state,
            isLoading: false,
            error: null,
            menus: response.payload.content,
            page: response.payload
        })
    ),




    on(
        createMenu,
        (state, { payload }) => ({
            ...state,
            isSaving: true,
            error: null
        })
    ),
    on(
        createMenuFailure,
        (state, { error }) => ({
            ...state,
            isSaving: false,
            error
        })
    ),
    on(
        createMenuSuccess,
        (state, { response }) => {
            const newMenus = [response.payload, ...state.menus];
            newMenus.splice(state.page.pageable.pageSize, 1);
            return {
                ...state,
                isSaving: false,
                menus: newMenus,
                page: {
                    ...state.page,
                    totalElements: state.page.totalElements + 1
                },
                lastAdded: response.payload.id
            };
        }
    )
);

export function menuReducer(state: MenuState, action: Action): any {
    return reducer(state, action);
}
