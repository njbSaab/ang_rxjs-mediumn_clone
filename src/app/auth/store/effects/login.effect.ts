import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PresistanceService } from '../../../shared/modules/services/presistance.service';
import { Router } from '@angular/router';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.prsistanceServece.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponese: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponese.error.errors }),
            );
          }),
        );
      }),
    ),
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );
  constructor(
    private actions$: Actions,
    private authService: AuthServiceService,
    private prsistanceServece: PresistanceService,
    private router: Router,
  ) {}
}
