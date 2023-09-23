import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '../store/action/getArticle.action';
import {
  articleSelector,
  isSubmittingSelector,
  validationErrorSelector,
} from '../store/selectors';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { updateArticleAction } from '../store/action/apdateArticle.action';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  public slug: string;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchDate();
  }

  public initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInputInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      }),
    );
  }

  public fetchDate(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  public onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }
}
