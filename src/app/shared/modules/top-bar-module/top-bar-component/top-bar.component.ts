import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../../types/currentUser.interface';
import { select, Store } from '@ngrx/store';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../../auth/store/selectors';

@Component({
  selector: 'mc-top-bar-component',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  @Input() title: string = '';

  public isLoggedIn$: Observable<boolean>;
  public isAnonymous$: Observable<boolean>;
  public currentUser$: Observable<CurrentUserInterface | null>;

  public username: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
