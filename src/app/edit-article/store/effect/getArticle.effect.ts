import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { ArticleInterface } from '../../../shared/types/article.interface';
import { ArticleService as ShareArticleService } from '../../../shared/services/article.service';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../action/getArticle.action';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.shareArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private shareArticleService: ShareArticleService,
  ) {}
}

export class getArticleEffect {}
