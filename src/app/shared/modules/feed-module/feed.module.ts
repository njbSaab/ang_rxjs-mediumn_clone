import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed-component/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { FeedServiceService } from './service/feed-service.service';
import { reducers } from 'src/app/shared/modules/feed-module/store/reducers';
import { ErrorMessageModule } from '../error-message-module/error-message.module';
import { LoadingModule } from '../loading-module/loading.module';
import { PaginationModule } from '../pagination-module/pagination.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  exports: [FeedComponent],
  providers: [FeedServiceService],
})
export class FeedModule {}
