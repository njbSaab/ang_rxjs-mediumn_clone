import { createAction, props } from '@ngrx/store';
import { ActionsTypes } from '../actionsTypes';
import { ProfileInterface } from '../../../shared/types/profile.interface';

export const getUserProfileAction = createAction(
  ActionsTypes.GET_USER_PROFILE,
  props<{ slug: string }>(),
);
export const getUserProfileSuccessAction = createAction(
  ActionsTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: ProfileInterface }>(),
);
export const getUserProfileFailureAction = createAction(
  ActionsTypes.GET_USER_PROFILE_FAILURE,
);
