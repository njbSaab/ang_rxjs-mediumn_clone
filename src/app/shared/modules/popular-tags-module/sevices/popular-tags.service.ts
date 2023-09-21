import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { enviroment } from '../../../../../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { PopularTagsResponseInterface } from '../types/popularTagsResponse.interface';
import { PopularTagType } from '../../../types/popularTag.type';

@Injectable()
export class PopularTagsService {
  public getPopularTags(): Observable<PopularTagType[]> {
    const url = `${enviroment.apiUrl2}/tags`;
    return this.http.get(url).pipe(
      map((response: PopularTagsResponseInterface) => {
        return response.tags;
      }),
    );
  }
  constructor(private http: HttpClient) {}
}
