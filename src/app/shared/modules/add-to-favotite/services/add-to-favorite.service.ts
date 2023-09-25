import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticleInterface } from '../../../types/article.interface';
import { enviroment } from '../../../../../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { GetArticleResponseInterface } from '../../../types/getArticleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoriteService {
  addToFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http.post(url, {}).pipe(map(this.getArticle));
  }
  removeFormFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http.delete(url).pipe(map(this.getArticle));
  }
  public getUrl(slug: string): string {
    return `${enviroment.apiUrl}/articles/${slug}/favorite`;
  }
  public getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }
  constructor(private http: HttpClient) {}
}
