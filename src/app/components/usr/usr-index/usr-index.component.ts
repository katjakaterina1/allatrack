import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';

@Component({
  selector: 'app-usr-index',
  templateUrl: './usr-index.component.html',
  styleUrls: ['./usr-index.component.sass']
})
export class UsrIndexComponent implements OnInit {
  public servicesData: any[];
  news: any;
  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.servicesData = [
      {
        title: 'Extand your team',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Build your idea',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Management',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
    this.newsService.load().subscribe(data => {
      this.news = data;
    });
  }
}
