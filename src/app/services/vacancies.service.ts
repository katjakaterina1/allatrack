import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import domain from './domain.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(private http: HttpClient) { }
  load(): any {
    return this.http.get<any>(`${domain}/vacancy/getAllVacancies`);
  }
  get(alias): any {
    return this.http.post<any>(`${domain}/vacancy/get`, { alias });
  }
}

