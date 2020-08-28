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
  public activePage = [1];
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
      this.data = data.slice((this.activePage[this.activePage.length - 1] - 1) * 4, 4 * this.activePage[this.activePage.length - 1]);
      this.originData = data;
    });
  }
  onPageChanged($event: any): void {
    this.activePage = $event.activePage;
    this.data = [];
    this.activePage.forEach(page => {
      let result;
      result = this.originData.slice((page - 1) * 4, 4 * page);
      this.data = this.data.concat(result);
      console.log(this.data);
    });
    // this.data = this.originData.slice((this.activePage[this.activePage.length - 1] - 1) * 10 , 10 * this.activePage[this.activePage.length - 1]);
  }
}
