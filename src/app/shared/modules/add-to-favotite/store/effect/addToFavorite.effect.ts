import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import {
  addToFavoriteAction,
  addToFavoriteFailureAction,
} from '../actions/addToActions.action';
import { AddToFavoriteService } from '../../services/add-to-favorite.service';
import { ArticleInterface } from '../../../../types/article.interface';

@Injectable()
export class AddToFavoriteEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoriteAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoriteService.removeFormFavorites(slug)
          : this.addToFavoriteService.addToFavorite(slug);
        return article$.pipe(
          map((article: ArticleInterface) => {
            const isFavorited = article.favorited;
            const slug = article.slug;

            return addToFavoriteAction({ isFavorited, slug });
          }),
          catchError(() => {
            return of(addToFavoriteFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private addToFavoriteService: AddToFavoriteService,
  ) {}
}
