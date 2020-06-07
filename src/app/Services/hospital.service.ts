import { BASE_ENDPOINT } from '../config/app';
import { Hospital } from '../models/hospital.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = BASE_ENDPOINT + 'hospitales';
  }

  listar(): Observable<Hospital[]> {
    return this.http.get(this.url).pipe(
      map((response) => {
        return response as Hospital[];
      })
    );
  }

  crear(hospital: Hospital): Observable<Hospital> {
    return this.http.post(this.url, hospital).pipe(
      map((response) => {
        return response as Hospital;
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

  ver(id: number): Observable<Hospital> {
    return this.http.get(this.url + '/' + id).pipe(
      map((response) => {
        return response as Hospital;
      })
    );
  }

  actualizar(hospital: Hospital): Observable<any> {
    return this.http.put(this.url + '/' + hospital.id, hospital).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
