import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroment/enviroment';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { CurrentUserInputInterface } from '../../shared/types/currentUserInput.interface';

@Injectable()
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  public getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  public register(
    data: RegisterRequestInterface,
  ): Observable<CurrentUserInterface> {
    const url = `${enviroment.apiUrl2}/users`;

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${enviroment.apiUrl2}/users/login`;
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${enviroment.apiUrl2}/user`;
    return this.http.get(url).pipe(map(this.getUser));
  }
  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface,
  ): Observable<CurrentUserInputInterface> {
    const url = `${enviroment.apiUrl}/user`;
    // Создайте новый объект с текущим паролем и обновленными данными
    const updatedUser: CurrentUserInputInterface = {
      ...currentUserInput,
      password: currentUserInput.password,
    };

    return this.http
      .put<CurrentUserInputInterface>(url, { user: updatedUser })
      .pipe(map(() => updatedUser));
  }
}
