import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { filter, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from '../../auth/store/selectors';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { updateCurrentUserAction } from '../../auth/store/actions/updateCurrentUser';
import { logoutAction } from '../../auth/store/actions/sync.action';
import { CurrentUserInputInterface } from '../../shared/types/currentUserInput.interface';

@Component({
  selector: 'mc-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUser: CurrentUserInterface = {
    email: '',
    username: '',
    bio: '',
    image: '',
    token: '',
  };
  currentUserSubscription: Subscription;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}
  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
    this.initializeForm();
  }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  public initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }
  public initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser?.image,
      username: this.currentUser?.username,
      bio: this.currentUser?.bio,
      email: this.currentUser?.email,
      password: '',
    });
  }

  public submit(): void {
    if (!this.currentUser || !this.isSubmitting$) {
      return;
    }

    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    };

    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  public logout(): void {
    this.store.dispatch(logoutAction());
  }
}
