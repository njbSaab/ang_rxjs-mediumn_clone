import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { GlobalFeedComponent } from './global-feed/global-feed-component/global-feed.component';
import { YourFeedComponent } from './your-feed/your-feed/your-feed.component';
import { TagFeedComponent } from './tag-feed/tag-feed/tag-feed.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: GlobalFeedComponent,
  },
  {
    path: 'your-feed',
    component: YourFeedComponent,
  },
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
