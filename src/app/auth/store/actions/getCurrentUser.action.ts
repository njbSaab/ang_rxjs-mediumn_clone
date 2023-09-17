import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionsTypes';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);
export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
);
export const getCurrentUserFailure = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
);
