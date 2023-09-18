import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationsComponent } from './paginations/paginations.component';
import { UtilsService } from '../../services/utils.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginationsComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginationsComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
