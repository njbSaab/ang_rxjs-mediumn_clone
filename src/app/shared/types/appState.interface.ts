import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed-module/types/feedState.interface';

export interface AppStateInterface<> {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
