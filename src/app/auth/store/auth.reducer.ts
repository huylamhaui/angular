import { Action, createReducer, on } from '@ngrx/store';
import { checkToken, checkTokenFailure, checkTokenSuccess, login, loginFailure, loginSuccess } from './auth.action';

export interface AuthState {
    isLogingIn: boolean;
    isCheckingToken: boolean;
    token: string;
    userName: string;
    roles: string[];
    error: any;
}

const initState: AuthState = {
    isLogingIn: false,
    isCheckingToken: false,
    token: null,
    userName: null,
    roles: [],
    error: null
};

const reducer = createReducer(
    initState,
    on(
        login,
        (state, action) => ({
            ...state,
            isLogingIn: true,
            token: null,
            userName: null,
            roles: []
        })
    ),
    on(
        loginFailure,
        (state, { error }) => ({
            ...state,
            isLogingIn: false,
            error
        })
    ),
    on(
        loginSuccess,
        (state, { response }) => ({
            ...state,
            error: null,
            isLogingIn: false,
            token: response.payload
        })
    ),



    on(
        checkToken,
        (state, action) => ({
            ...state,
            isCheckingToken: true,
            error: null
        })
    ),
    on(
        checkTokenFailure,
        (state, { error }) => ({
            ...state,
            isCheckingToken: false,
            error
        })
    ),
    on(
        checkTokenSuccess,
        (state, { response }) => ({
            ...state,
            error: null,
            isCheckingToken: false,
            userName: response.payload.name,
            roles: response.payload.authorities
        })
    )
);

export function authReducer(state: AuthState, action: Action): any {
    return reducer(state, action);
}
