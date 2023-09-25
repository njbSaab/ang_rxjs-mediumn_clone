import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { UserProfileService } from '../../service/user-profile.service';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '../actions/getUserProfile.action';
import { ProfileInterface } from '../../../shared/types/profile.interface';

@Injectable()
export class GetUserProfileEffect {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.getUserProfileService.getUserProfile(slug).pipe(
          map((userProfile: ProfileInterface) => {
            return getUserProfileSuccessAction({ userProfile });
          }),
          catchError(() => {
            return of(getUserProfileFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private getUserProfileService: UserProfileService,
  ) {}
}
