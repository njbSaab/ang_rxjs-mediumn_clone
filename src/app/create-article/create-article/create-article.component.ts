import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import { select, Store } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { createArticleAction } from '../store/actions/createArticle.action';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  public initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  public onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({ articleInput: articleInput }));
  }
}
