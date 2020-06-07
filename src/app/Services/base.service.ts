import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected apiUrl: string = environment.apiUrl as string;
  protected fullUrl: string = undefined;
}
