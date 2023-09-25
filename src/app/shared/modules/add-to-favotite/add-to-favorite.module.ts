import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoriteComponent } from './add-to-favorite/add-to-favorite.component';
import { AddToFavoriteService } from './services/add-to-favorite.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoriteEffect } from './store/effect/addToFavorite.effect';

@NgModule({
  declarations: [AddToFavoriteComponent],
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoriteEffect])],
  exports: [AddToFavoriteComponent],
  providers: [AddToFavoriteService],
})
export class AddToFavoriteModule {}
