import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-usr-blog-single',
  templateUrl: './usr-blog-single.component.html',
  styleUrls: ['./usr-blog-single.component.sass']
})
export class UsrBlogSingleComponent implements OnInit {
  newsId: any;
  alias: any;
  data: any;
  id: any;
  news: any;
  nextNews: any;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.newsId = this.route.params.subscribe(params => {
      this.alias = params['alias'];
      this.newsService.get(this.alias).subscribe(data => {
        window.scroll(0, 0);
        this.data = data;
        this.id = this.data.id;
      });
    });
    this.newsService.load().subscribe(data => {
      this.news = data;
    });
  }
  readNext(): any{
    this.newsService.neighborNews(this.id).subscribe(data => {
      this.nextNews = '/blog-single/' + data[1].alias.toString();
      this.router.navigate([this.nextNews]);
    });
  };

}
