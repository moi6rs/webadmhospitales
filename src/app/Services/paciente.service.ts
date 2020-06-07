import { BASE_ENDPOINT } from '../config/app';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';
import { PacienteForm } from '../models/pacient-form.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = BASE_ENDPOINT + 'pacientes';
  }

  listar(): Observable<Paciente[]> {
    return this.http.get(this.url).pipe(
      map((response) => {
        return response as Paciente[];
      })
    );
  }

  crear(paciente: Paciente): Observable<Paciente> {
    return this.http.post(this.url, paciente).pipe(
      map((response) => {
        return response as Paciente;
      })
    );
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id).pipe(
      map((response) => {
        return response;
      })
    );
  }

  ver(id: number): Observable<PacienteForm> {
    return this.http.get(this.url + '/' + id).pipe(
      map((response) => {
        return response as PacienteForm;
      })
    );
  }

  actualizar(paciente: Paciente): Observable<any> {
    return this.http.put(this.url + '/' + paciente.id, paciente).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
