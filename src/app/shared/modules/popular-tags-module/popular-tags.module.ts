import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { PopularTagsService } from './sevices/popular-tags.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffectEffect } from './store/effects/getPopularTags.effect';
import { LoadingModule } from '../loading-module/loading.module';
import { ErrorMessageModule } from '../error-message-module/error-message.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffectEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterLink,
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
