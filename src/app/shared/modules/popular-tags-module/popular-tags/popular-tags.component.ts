import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPopularTagsAction } from '../store/actions/getPopularTags.action';
import { Observable } from 'rxjs';
import { PopularTagType } from '../../../types/popularTag.type';
import {
  isLoadingSelector,
  popularTagsSelector,
  errorTagsSelector,
} from '../store/selectors';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  public popularTags$: Observable<PopularTagType[] | null>;
  public isLoading$: Observable<boolean>;
  public errors$: Observable<string | null>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }
  public fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
  public initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorTagsSelector));
  }
}
