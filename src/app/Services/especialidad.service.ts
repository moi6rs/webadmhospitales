import { BASE_ENDPOINT } from '../config/app';
import { Especialidad } from '../models/especialidad.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = BASE_ENDPOINT + 'especialidades';
  }

  listarEspecialidades(): Observable<Especialidad[]> {
    return this.http.get(this.url).pipe(
      map((response) => {
        return response as Especialidad[];
      })
    );
  }

  crear(especialidad: Especialidad): Observable<Especialidad> {
    console.log("crear",especialidad);
    return this.http.post(this.url, especialidad).pipe(
      map((response) => {
        return response as Especialidad;
      })
    );
  }

  eliminarEspecialidad(especialidaId: number): Observable<any> {
    return this.http.delete(this.url + '/' + especialidaId).pipe(
      map((response) => {
        return response;
      })
    );
  }

  ver(id: number): Observable<Especialidad> {
    return this.http.get(this.url + '/' + id).pipe(
      map((response) => {
        return response as Especialidad;
      })
    );
  }

  actualizar(especialidad: Especialidad): Observable<any> {
    return this.http.put(this.url + '/' + especialidad.id, especialidad).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
