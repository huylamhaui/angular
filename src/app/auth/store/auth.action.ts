import { createAction, props } from '@ngrx/store';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { AuthRequest, CheckTokenResponse } from '../auth.model';

export const login = createAction(
    '[Login page] login',
    props<{ payload: AuthRequest }>()
);

export const loginFailure = createAction(
    '[Auth api] login failure',
    props<{ error: any }>()
);


export const loginSuccess = createAction(
    '[Auth api] login success',
    props<{ response: ApiResponse<string> }>()
);





export const checkToken = createAction(
    '[Guard] check token',
    props<{ token: string }>()
);

export const checkTokenFailure = createAction(
    '[Auth api] check token failure',
    props<{ error: any }>()
);

export const checkTokenSuccess = createAction(
    '[Auth api] check token success',
    props<{ response: ApiResponse<CheckTokenResponse> }>()
);


