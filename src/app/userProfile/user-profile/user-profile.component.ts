import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileInterface } from '../../shared/types/profile.interface';
import { filter, map, Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getUserProfileAction } from '../store/actions/getUserProfile.action';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  errorSelector,
  isLoadingSelector,
  userProfileFeatureSelector,
  userProfileSelector,
} from '../store/selectors';
import { UserProfileStateInterface } from '../types/userProfileState.interface';
import { combineLatest } from 'rxjs';
import { currentUserSelector } from '../../auth/store/selectors';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  isCurrentUserProfiles$: Observable<boolean>;

  public userProfile: ProfileInterface;
  public apiUrl: string;
  public slug: string;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  public initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileFeatureSelector))
      .subscribe((userProfileState: UserProfileStateInterface) => {
        this.userProfile = {
          bio: userProfileState.data?.bio || null,
          username: userProfileState.data?.username || '',
          following: userProfileState.data?.following || false,
          image: userProfileState.data?.image || '',
        };
      });
  }

  public initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

    this.isCurrentUserProfiles$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          ProfileInterface,
        ]) => {
          return currentUser.username === userProfile.username;
        },
      ),
    );
    this.route.params.subscribe((params: Params) => {
      this.fetchDate();
    });
  }

  public fetchDate(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  getApiUrl(): string {
    const isFavorite = this.router.url.includes('favorite');
    return (this.apiUrl = isFavorite
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`);
  }
}
