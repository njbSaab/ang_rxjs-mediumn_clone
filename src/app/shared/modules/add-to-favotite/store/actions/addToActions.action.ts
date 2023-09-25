import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../ActionTypes';
import { ArticleInterface } from '../../../../types/article.interface';

export const addToFavoriteAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>(),
);
export const addToFavoriteSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>(),
);
export const addToFavoriteFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE,
);
