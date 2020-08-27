import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import domain from './domain.config';
import {map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService{
  newsCategories = [
    {
      id: 0,
      title: 'Latest'
    },
    {
      id: 1,
      title: 'Finance'
    },
    {
      id: 2,
      title: 'Retail & Distribution'
    },
    {
      id: 3,
      title: 'Healthcare'
    },
    {
      id: 4,
      title: 'Government'
    },
    {
      id: 5,
      title: 'Telecom'
    },
    {
      id: 6,
      title: 'Automotive'
    },
    {
      id: 7,
      title: 'Logistics'
    },
    {
      id: 8,
      title: 'Media & Entertainment'
    },
    {
      id: 9,
      title: 'Insurance'
    },
    {
      id: 10,
      title: 'Travel & Hospitality'
    },
    {
      id: 11,
      title: 'Gas & oil'
    },
    {
      id: 12,
      title: 'Metallurgy'
    },
    {
      id: 13,
      title: 'Agriculture'
    },
    {
      id: 14,
      title: 'Construction'
    },
    {
      id: 15,
      title: 'Business intelligence'
    },
    {
      id: 16,
      title: 'Product Engineering'
    },
    {
      id: 17,
      title: 'Software & Hi-Tech'
    },
    {
      id: 18,
      title: 'Internet of Things'
    },
    {
      id: 19,
      title: 'Big data and AI'
    },
    {
      id: 20,
      title: 'Transformation platforms'
    },
    {
      id: 21,
      title: 'Security'
    },
    {
      id: 22,
      title: 'R&D and innovation'
    },
    {
      id: 23,
      title: 'Neuro Lab'
    },
    {
      id: 24,
      title: 'Blockchain Technologies'
    },
    {
      id: 25,
      title: 'Consulting'
    },
    {
      id: 26,
      title: 'Web Development'
    },
    {
      id: 27,
      title: 'Cloud & Devops'
    },
    {
      id: 28,
      title: 'UI & UX Design'
    },
    {
      id: 29,
      title: 'Digital marketing'
    },
    {
      id: 30,
      title: 'VR/AR/MR '
    },
    {
      id: 31,
      title: 'Mobile Development'
    }
  ];
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  load(): any {
    return this.http.get<any>(`${domain}/news/getAllNews`).pipe(
      map(result => result.map(item => {
        item.cats = [];
        item.categories.forEach(it => {
          this.newsCategories.forEach(category => {
            if (category.id.toString() === it.toString()) {
              item.cats.push(category.title);
            }
          });
        });
        return item;
      })
    ));
  }
  get(alias): any {
    return this.http.post<any>(`${domain}/news/get`, { alias }).pipe(
      map(item => {
        item.cats = [];
        item.categories.forEach(it => {
          this.newsCategories.forEach(category => {
            if (category.id.toString() === it.toString()) {
              item.cats.push(category.title);
            }
          });
        });
        return item;
      })
    );
  }
  neighborNews(id): any {
    return this.http.post<any>(`${domain}/news/neighborNews`, {id});
  }
  getNLastNews(n = 4): any {
    return this.http.post<any>(`${domain}/news/getNLastNews`, {n});
  }
}
