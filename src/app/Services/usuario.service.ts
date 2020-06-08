import { BASE_ENDPOINT } from '../config/app';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  public getUsuariosService(): Observable<any> {
    return this.http.get<any>(BASE_ENDPOINT + 'users');
  }

  public getUsuario(idUsuario): Observable<any> {
    return this.http.get(BASE_ENDPOINT + 'users/user/' + idUsuario);
  }
}
