import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { ArticleInterface } from '../../../shared/types/article.interface';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>(),
);
export const getArticleSuccessAction = createAction(
  ActionTypes.Get_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>(),
);
export const getArticleFailureAction = createAction(
  ActionTypes.Get_ARTICLE_FAILURE,
);
