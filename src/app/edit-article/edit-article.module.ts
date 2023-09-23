import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditArticleService } from './service/edit-article.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effect/getArticle.effect';
import { UpdateArticleEffect } from './store/effect/updateArticle.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { LoadingModule } from '../shared/modules/loading-module/loading.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    ArticleFormModule,
    LoadingModule,
  ],
  exports: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
