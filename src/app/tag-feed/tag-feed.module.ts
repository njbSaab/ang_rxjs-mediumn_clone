import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './tag-feed/tag-feed.component';
import { FeedModule } from '../shared/modules/feed-module/feed.module';
import { FeedToggleModule } from '../shared/modules/feed-toggle-module/feed-toggle.module';
import { BanerModule } from '../shared/modules/banner-module/baner.module';
import { PopularTagsModule } from '../shared/modules/popular-tags-module/popular-tags.module';

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    FeedModule,
    FeedToggleModule,
    BanerModule,
    PopularTagsModule,
  ],
  exports: [TagFeedComponent],
})
export class TagFeedModule {}
