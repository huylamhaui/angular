import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { AuthService } from '../auth.service';
import { checkToken, checkTokenFailure, checkTokenSuccess, login, loginFailure, loginSuccess } from './auth.action';

@Injectable()
export class AuthEffect {

    constructor(
        private actions$: Actions,
        private service: AuthService,
        private router: Router
    ) { }


    login$ = createEffect(
        () => this.actions$.pipe(
            ofType(login),
            map(action => action.payload),
            switchMap(
                payload => this.service.login(payload).pipe(
                    mergeMap(response => {
                        if (response.code === 200) {
                            return [
                                loginSuccess({ response }),
                                // checkToken({ token: response.payload })
                            ];
                        } else {
                            return [loginFailure({ error: response })];
                        }
                    }),
                    catchError(error => of(loginFailure({ error })))
                )
            )
        )
    );



    checkToken$ = createEffect(
        () => this.actions$.pipe(
            ofType(checkToken),
            map(action => action.token),
            switchMap(
                token => this.service.checkToken(token).pipe(
                    map(response => {
                        if (response.code === 200) {
                            return checkTokenSuccess({ response });
                        } else {
                            return checkTokenFailure({ error: response });
                        }
                    }),
                    catchError(error => of(checkTokenFailure({ error })))
                )
            )
        )
    );



    $loginSuccess = createEffect(
        () => this.actions$.pipe(
            ofType(loginSuccess),
            tap(action => {
                localStorage.setItem('token', action.response.payload);
                this.router.navigate(['management', 'menu']);
            })
        ),
        {
            dispatch: false
        }
    );


}
