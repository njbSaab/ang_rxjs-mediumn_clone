import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFeedAction } from '../store/actions/getFeed.action';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import {
  errorSelector,
  feedSelector,
  isSLoadingSelector,
} from '../store/selectors';
import { enviroment } from '../../../../../enviroment/enviroment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseUrl, stringify } from 'query-string';

@Component({
  selector: 'mc-feed-component',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;
  public limit = enviroment.limit;
  public baseUrl: string;
  public currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.currentPage = 1; // Устанавливаем значение по умолчанию
  }

  ngOnInit(): void {
    this.initializeValues();
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
    this.initializeListeners();
  }

  public initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isSLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  public fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParmas = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParmas }));
  }

  public initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page']) || 1;
      this.fetchFeed();
    });
  }
}
