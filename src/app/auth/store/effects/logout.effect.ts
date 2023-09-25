import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { logoutAction } from '../actions/sync.action';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PresistanceService } from '../../../shared/services/presistance.service';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        // Используйте `actions$` здесь
        ofType(logoutAction),
        tap(() => {
          this.persistanceService.set('accessToken', '');
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private persistanceService: PresistanceService,
    private router: Router,
  ) {}
}
