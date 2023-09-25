import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoriteAction } from '../store/actions/addToActions.action';

@Component({
  selector: 'mc-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.scss'],
})
export class AddToFavoriteComponent implements OnInit {
  @Input('isFavorite') isFavoriteProps: boolean;
  @Input('favoritesCount') favoritesCountProps: number;
  @Input('articleSlug') articleSlugProps: string;
  public favoritesCount: number;
  public isFavorited: boolean;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoriteProps;
  }
  public handleLike(): void {
    this.store.dispatch(
      addToFavoriteAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      }),
    );
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
