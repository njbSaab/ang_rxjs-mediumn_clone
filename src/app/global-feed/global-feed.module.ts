import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './global-feed-component/global-feed.component';
import { FeedModule } from '../shared/modules/feed-module/feed.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, FeedModule],
  exports: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
