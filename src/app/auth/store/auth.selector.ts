import { createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>('authStore');


export const getIsLoginIn = createSelector(
    getAuthState,
    authState => authState.isLogingIn
);

export const getIsCheckingToken = createSelector(
    getAuthState,
    authState => authState.isCheckingToken
);

export const getAuthError = createSelector(
    getAuthState,
    authState => authState.error
);

export const getToken = createSelector(
    getAuthState,
    authState => authState.token
);
