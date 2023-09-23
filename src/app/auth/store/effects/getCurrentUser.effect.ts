import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { PresistanceService } from '../../../shared/services/presistance.service';

import {
  getCurrentUserAction,
  getCurrentUserFailure,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.prsistanceServece.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailure());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailure());
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthServiceService,
    private prsistanceServece: PresistanceService,
  ) {}
}
