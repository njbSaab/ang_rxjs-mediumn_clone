import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { GlobalFeedComponent } from './global-feed/global-feed-component/global-feed.component';
import { YourFeedComponent } from './your-feed/your-feed/your-feed.component';
import { TagFeedComponent } from './tag-feed/tag-feed/tag-feed.component';
import { ArticleComponent } from './article/article/article.component';
import { CreateArticleComponent } from './create-article/create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article/edit-article.component';
import { SettingComponent } from './setting/setting/setting.component';
import { UserProfileComponent } from './userProfile/user-profile/user-profile.component';

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
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
  {
    path: 'articles-creat',
    component: CreateArticleComponent,
  },
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
  {
    path: 'settings',
    component: SettingComponent,
  },
  {
    path: 'user-profile/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'user-profile/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
