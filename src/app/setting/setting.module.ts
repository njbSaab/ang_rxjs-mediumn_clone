import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorsModule } from '../shared/modules/backend-errors-module/backend-errors.module';

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('setting', reducers),
    ReactiveFormsModule,
    BackendErrorsModule,
  ],
  exports: [SettingComponent],
})
export class SettingModule {}
