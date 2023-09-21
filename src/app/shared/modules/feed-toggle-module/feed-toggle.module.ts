import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedToggleComponent } from './feed-toggle/feed-toggle.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [FeedToggleComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [FeedToggleComponent],
})
export class FeedToggleModule {}
