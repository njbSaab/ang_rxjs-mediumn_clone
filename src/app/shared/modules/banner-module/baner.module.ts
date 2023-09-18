import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanerComponent } from './baner-component/baner.component';

@NgModule({
  declarations: [BanerComponent],
  imports: [CommonModule],
  exports: [BanerComponent],
})
export class BanerModule {}
