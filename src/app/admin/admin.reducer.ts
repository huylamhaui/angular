import { categoryReducer, CategoryState } from './category/store/category.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { menuReducer, MenuState } from './menu/store/menu.reducer';

export interface AdminState {
    categoryState: CategoryState;
    menuState: MenuState;
}

export const adminReducer: ActionReducerMap<AdminState> = {
    categoryState: categoryReducer,
    menuState: menuReducer
};
