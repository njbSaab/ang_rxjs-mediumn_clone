import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { enviroment } from '../../../../../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedServiceService {
  constructor(private http: HttpClient) {}
  public getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = enviroment.apiUrl2 + url;

    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}
