import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import domain from './domain.config';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  load(): any {
    return this.http.get<any>(`${domain}/news/getAllNews`);
  }
  add(data): any {
    return this.http.post<any>(`${domain}/post`, data);
  }

  edit(id, data): any {
    return this.http.post<any>(`${domain}/post/${id}`, data);
  }

  get(alias): any {
    return this.http.post<any>(`${domain}/news/get`, { alias });
  }
  getById(id): any {
    return this.http.get<any>(`${domain}/post/${id}`);
  }
  getByIdAdmin(id): any {
    return this.http.get<any>(`${domain}/post/${id}`);
  }
  delete(id): any {
    return this.http.delete<any>(`${domain}/en/post/${id}`);
  }
}
