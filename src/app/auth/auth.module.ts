import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/effects/reducers';
import { AuthServiceService } from './services/auth-service.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorsModule } from '../shared/modules/backend-errors-module/backend-errors.module';
import { PresistanceService } from '../shared/modules/services/presistance.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorsModule,
  ],
  exports: [RegisterComponent],
  providers: [AuthServiceService, PresistanceService],
})
export class AuthModule {}
