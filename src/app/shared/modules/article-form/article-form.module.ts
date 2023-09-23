import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorsModule } from '../backend-errors-module/backend-errors.module';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BackendErrorsModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
