import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { BanerModule } from '../shared/modules/banner-module/baner.module';
import { FeedToggleModule } from '../shared/modules/feed-toggle-module/feed-toggle.module';
import { FeedModule } from '../shared/modules/feed-module/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags-module/popular-tags.module';

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    BanerModule,
    FeedToggleModule,
    FeedModule,
    PopularTagsModule,
  ],
  exports: [YourFeedComponent],
})
export class YourFeedModule {}
