import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ArticleInterface } from '../../shared/types/article.interface';
import { enviroment } from '../../../enviroment/enviroment';
import { SaveArticleResponseInterface } from '../../shared/types/saveArticleResponse.interface';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  public createArticle(
    articleInput: ArticleInputInterface,
  ): Observable<ArticleInterface> {
    const fullUrl = `${enviroment.apiUrl}/articles`;

    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, { article: articleInput })
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
}
