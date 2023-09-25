import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '../store/actions/getArticle.action';
import { ArticleInterface } from '../../shared/types/article.interface';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../store/selectors';
import { currentUserSelector } from '../../auth/store/selectors';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { deleteArticleAction } from '../store/actions/deleteArticle.action';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  public slug: string;
  public article: ArticleInterface | null;
  public articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  isAuthor$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initialListener();
  }

  public initialListener(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }
  public initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null,
        ]) => {
          if (!article || !currentUser) {
            return false;
          }
          return currentUser.username === article.author.username;
        },
      ),
    );
  }

  public fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
  public deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
}
