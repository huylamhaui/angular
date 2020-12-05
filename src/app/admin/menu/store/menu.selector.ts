import { createSelector } from '@ngrx/store';
import { getMenuState } from '../../admin.selector';

export const getMenus = createSelector(
    getMenuState,
    state => state.menus
);

export const getIsLoading = createSelector(
    getMenuState,
    state => state.isLoading
);

export const getPage = createSelector(
    getMenuState,
    state => state.page
);

export const getIsSaving = createSelector(
    getMenuState,
    state => state.isSaving
);

export const getError = createSelector(
    getMenuState,
    state => state.error
);


export const getLastAdded = createSelector(
    getMenuState,
    state => state.lastAdded
);
