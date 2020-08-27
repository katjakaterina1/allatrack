import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {NewsService} from '../../../services/news.service';

@Component({
  selector: 'app-usr-blog-list',
  templateUrl: './usr-blog-list.component.html',
  styleUrls: ['./usr-blog-list.component.sass']
})
export class UsrBlogListComponent implements AfterViewInit, OnInit {
  tabs: any;
  data: any[];
  originData: any[];
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews();
    this.tabs = this.newsService.newsCategories;
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(`tab-0`).classList.add('active');
    }
  }
  setActive(i, id): any{
    let els;
    if (isPlatformBrowser(this.platformId)) {
      els = document.querySelectorAll('.blog__tabs_heading_single');
    }
    for (let j = 0; j < this.tabs.length; j++) {
      els[j].classList.remove('active');
    }
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(`tab-${i}`).classList.add('active');
      if (id > 0) {
        const tempArray = [];
        this.originData.forEach(article => {
          article.categories.forEach(cat => {
            if (cat.toString() === id.toString()) {
              tempArray.push(article);
            }
          });
        });
        this.data = tempArray;
      } else {
        this.data = this.originData;
      }

    }
  }
  getNews(): any {
    this.newsService.load().subscribe(data => {
      console.log(data);
      this.data = data;
      this.originData = data;
    });
  }

}
