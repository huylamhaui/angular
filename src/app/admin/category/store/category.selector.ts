import { createSelector } from '@ngrx/store';
import { getCategorySelector } from '../../admin.selector';

export const getListCategoryType = createSelector(
    getCategorySelector,
    state => state.listCategoryType
);

const getIsLoading = createSelector(
    getCategorySelector,
    state => state.isLoading
);

const getError = createSelector(
    getCategorySelector,
    state => state.error
);
