import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthLoginInfo } from 'src/app/models/login-info';
import { BASE_ENDPOINT } from 'src/app/config/app';
import { Injectable } from '@angular/core';
import { JwtResponse } from 'src/app/models/jwt-response';
import { Observable } from 'rxjs';
import { SignUpInfo } from 'src/app/models/sinup-info';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = BASE_ENDPOINT + 'auth/signin';
  private signupUrl = BASE_ENDPOINT + 'auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
