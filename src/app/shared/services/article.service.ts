import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetArticleResponseInterface } from '../types/getArticleResponse.interface';
import { enviroment } from '../../../enviroment/enviroment'; // Опечатка в "environment" исправлена
import { ArticleInterface } from '../types/article.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${enviroment.apiUrl}/articles/${slug}`;

    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article;
      }),
    );
  }
}
