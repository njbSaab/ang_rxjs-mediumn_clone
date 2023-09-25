import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProfileInterface } from '../../shared/types/profile.interface';
import { enviroment } from '../../../enviroment/enviroment';
import { GetUserResponseInterface } from '../types/getUserResponse.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${enviroment.apiUrl}/profiles/${slug}`;
    return this.http
      .get(url)
      .pipe(map((response: GetUserResponseInterface) => response.profile));
  }
}
