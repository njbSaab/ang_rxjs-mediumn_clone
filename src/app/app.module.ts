import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/modules/top-bar-module/top-bar.module';
import { PresistanceService } from './shared/services/presistance.service';
import { AuthintercepterService } from './shared/services/authintercepter.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    //modules-component
    AuthModule,
    TopBarModule,
    GlobalFeedModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    PresistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthintercepterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
