import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  exports: [RegisterComponent],
  providers: [AuthServiceService],
})
export class AuthModule {}
