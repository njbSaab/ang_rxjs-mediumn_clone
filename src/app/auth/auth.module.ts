import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthServiceService } from './services/auth-service.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorsModule } from '../shared/modules/backend-errors-module/backend-errors.module';
import { PresistanceService } from '../shared/services/presistance.service';
import { LoginEffect } from './store/effects/login.effect';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { UpdateCurrentUserEffect } from './store/effects/updateCurrentUser.effect';
import { LogoutEffect } from './store/effects/logout.effect';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    BackendErrorsModule,
    RouterModule,
  ],
  exports: [RegisterComponent, LoginComponent],
  providers: [AuthServiceService, PresistanceService],
})
export class AuthModule {}
