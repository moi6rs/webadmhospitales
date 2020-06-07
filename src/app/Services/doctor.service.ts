import { BASE_ENDPOINT } from '../config/app';
import { Doctor } from '../models/doctor.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = BASE_ENDPOINT + 'doctores';
  }

  listar(): Observable<Doctor[]> {
    return this.http.get(this.url).pipe(
      map((response) => {
        return response as Doctor[];
      })
    );
  }

  crear(paciente: Doctor): Observable<Doctor> {
    return this.http.post(this.url, paciente).pipe(
      map((response) => {
        return response as Doctor;
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

  ver(id: number): Observable<Doctor> {
    return this.http.get(this.url + '/' + id).pipe(
      map((response) => {
        return response as Doctor;
      })
    );
  }

  actualizar(paciente: Doctor): Observable<any> {
    return this.http.put(this.url + '/' + paciente.id, paciente).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
