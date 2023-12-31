import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/getArticle';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../shared/modules/loading-module/loading.module';
import { ErrorMessageModule } from '../shared/modules/error-message-module/error-message.module';
import { TagsModule } from '../shared/modules/tags-module/tags.module';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { ArticleServiceService } from './service/article-service.service';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
    TagsModule,
  ],
  exports: [ArticleComponent],
  providers: [SharedArticleService, ArticleServiceService],
})
export class ArticleModule {}
