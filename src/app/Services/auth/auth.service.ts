import { Injectable } from '@angular/core';
import { apiUrl } from '../../constants/api-url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from '../../interfaces/jwt-response';
import { AuthLoginInfo } from '../../interfaces/login-info';
import { SignUpInfo } from '../../interfaces/sinup-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = apiUrl + 'auth/signin';
  private signupUrl = apiUrl + 'auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
