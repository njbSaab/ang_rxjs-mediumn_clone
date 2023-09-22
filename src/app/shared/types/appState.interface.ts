import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed-module/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags-module/types/popularTagsState.interface';
import { ArticleStateInterface } from '../../article/types/articleState.interface';

export interface AppStateInterface<> {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
}
