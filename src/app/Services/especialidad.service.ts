import { BaseService } from './base.service';
import { Especialidad } from '../models/especialidad.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadService extends BaseService {

  constructor(private http: HttpClient) {
    super();
    this.fullUrl = this.apiUrl + 'especialidades';
  }

  listarEspecialidades(): Observable<Especialidad[]>{
    return this.http.get("http://localhost:8080/especialidades").pipe(
      map(response => {
        return response as Especialidad[];
      })
    );
  }
}
