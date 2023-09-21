import { Component, Input } from '@angular/core';
import { PopularTagType } from '../../../types/popularTag.type';

@Component({
  selector: 'mc-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  @Input('tags') tagsProps: PopularTagType[];
}
