import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../actions/updateCurrentUser';

@Injectable()
export class UpdateCurrentUserEffect {
  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponese: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({
                errors: errorResponese.error.errors,
              }),
            );
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthServiceService,
  ) {}
}
