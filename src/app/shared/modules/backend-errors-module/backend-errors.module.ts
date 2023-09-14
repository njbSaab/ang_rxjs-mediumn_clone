import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsComponent } from './components/backend-errors-component/backend-errors.component';

@NgModule({
  declarations: [BackendErrorsComponent],
  imports: [CommonModule],
  exports: [BackendErrorsComponent],
})
export class BackendErrorsModule {}
