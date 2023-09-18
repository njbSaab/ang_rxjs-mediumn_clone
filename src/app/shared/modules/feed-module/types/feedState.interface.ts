import { GetFeedResponseInterface } from './getFeedResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: null | string;
  data: GetFeedResponseInterface | null;
}
