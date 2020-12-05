import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from './admin.reducer';

export const adminSelector = createFeatureSelector<AdminState>('adminStore');

export const getCategorySelector = createSelector(
    adminSelector,
    state => state.categoryState
);


export const getMenuState = createSelector(
    adminSelector,
    state => state.menuState
);

