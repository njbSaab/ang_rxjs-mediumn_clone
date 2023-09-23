import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ArticleInterface } from '../../../shared/types/article.interface';
import { EditArticleService } from '../../service/edit-article.service';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../action/apdateArticle.action';

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ articleInput, slug }) => {
        return this.editArticleService.upDateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError((errorResponese: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({
                errors: errorResponese.error.errors,
              }),
            );
          }),
        );
      }),
    ),
  );

  redirectAfterAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        }),
      ),
    { dispatch: false },
  );
  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router,
  ) {}
}
