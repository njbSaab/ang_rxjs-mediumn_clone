import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroment/enviroment';
import { AuthResponseInterface } from '../types/authResponse.interface';

@Injectable()
export class AuthServiceService {
  public register(
    data: RegisterRequestInterface,
  ): Observable<CurrentUserInterface> {
    const url = `${enviroment.apiUrl2}/users`;

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
  constructor(private http: HttpClient) {}
}
