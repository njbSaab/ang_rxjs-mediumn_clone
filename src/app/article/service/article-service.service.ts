import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroment';

@Injectable()
export class ArticleServiceService {
  constructor(private http: HttpClient) {}
  public deletedArticle(slug: string): Observable<{}> {
    const url = `${enviroment.apiUrl}/articles/${slug}`;
    return this.http.delete<{}>(url);
  }
}
