import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './global-feed-component/global-feed.component';
import { FeedModule } from '../shared/modules/feed-module/feed.module';
import { BanerModule } from '../shared/modules/banner-module/baner.module';
import { PopularTagsModule } from '../shared/modules/popular-tags-module/popular-tags.module';
import { FeedToggleModule } from '../shared/modules/feed-toggle-module/feed-toggle.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    FeedModule,
    BanerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
  exports: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
