import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './global-feed-component/global-feed.component';
import { FeedModule } from '../shared/modules/feed-module/feed.module';
import { BanerModule } from '../shared/modules/banner-module/baner.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, FeedModule, BanerModule],
  exports: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
