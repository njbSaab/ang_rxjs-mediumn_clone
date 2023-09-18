import { ActionsTypes } from '../actionsTypes';
import { createAction, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';

export const getFeedAction = createAction(
  ActionsTypes.GET_FEED,
  props<{ url: string }>(),
);
export const getFeedSuccessAction = createAction(
  ActionsTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>(),
);
export const getFeedFailureAction = createAction(ActionsTypes.GET_FEED_FAILURE);
