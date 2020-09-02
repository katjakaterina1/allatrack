import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewsService} from '../../../services/news.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  @Input() light = false;
  private openServices: boolean;
  private openExpertise: boolean;
  private openCompany: boolean;
  private openBlog: boolean;
  private openCase: boolean;
  private news: any;
  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.load().subscribe(data => {
      this.news = data;
    });
  }
  openSection(id): any{
    switch (id) {
      case 'services':
        this.openServices = !this.openServices;
        this.openExpertise = false;
        this.openCompany = false;
        this.openBlog = false;
        this.openCase = false;
        break;
      case 'expertise':
        this.openServices = false;
        this.openExpertise = !this.openExpertise;
        this.openCompany = false;
        this.openBlog = false;
        this.openCase = false;
        break;
      case 'company':
        this.openServices = false;
        this.openExpertise = false;
        this.openCompany = !this.openCompany;
        this.openBlog = false;
        this.openCase = false;
        break;
      case 'blog':
        this.openServices = false;
        this.openExpertise = false;
        this.openCompany = false;
        this.openBlog = !this.openBlog;
        this.openCase = false;
        break;
      case 'case':
        this.openServices = false;
        this.openExpertise = false;
        this.openCompany = false;
        this.openBlog = false;
        this.openCase = !this.openCase;
        break;
    }

  }

}
