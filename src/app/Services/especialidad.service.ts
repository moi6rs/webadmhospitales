import { BASE_ENDPOINT } from '../config/app';
import { Especialidad } from '../models/especialidad.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadService{
  url: string;
  constructor(private http: HttpClient) {
    this.url = BASE_ENDPOINT + "especialidades"
  }

  listarEspecialidades(): Observable<Especialidad[]>{
    return this.http.get(this.url).pipe(
      map(response => {
        return response as Especialidad[];
      })
    );
  }
}
