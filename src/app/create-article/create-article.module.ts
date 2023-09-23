import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleService } from './service/create-article.service';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  exports: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
