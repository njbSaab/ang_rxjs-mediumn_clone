import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed-module/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags-module/types/popularTagsState.interface';

export interface AppStateInterface<> {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
}
