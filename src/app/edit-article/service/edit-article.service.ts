import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { map, Observable } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroment';
import { SaveArticleResponseInterface } from '../../shared/types/saveArticleResponse.interface';

@Injectable()
export class EditArticleService {
  upDateArticle(
    slug: string,
    articleInput: ArticleInputInterface,
  ): Observable<ArticleInputInterface> {
    const fullUrl = `${enviroment.apiUrl}/articles/${slug}`;
    return this.http
      .put(fullUrl, { article: articleInput })
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
  constructor(private http: HttpClient) {}
}
