import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  openAbout: any = false;
  openServices: any = false;
  openExpertise: any = false;
  openSidebar: any = false;
  eng: any = true;
  ukr: any = false;
  ru: any = false;
  constructor() { }

  ngOnInit(): void {
  }
  openDropdown(id): any{
    switch (id) {
      case 'about':
        this.openAbout = true;
        this.openServices = false;
        this.openExpertise = false;
        break;
      case 'services':
        this.openAbout = false;
        this.openServices = true;
        this.openExpertise = false;
        break;
      case 'expertise':
        this.openAbout = false;
        this.openServices = false;
        this.openExpertise = true;
        break;
      case 'close':
        this.openAbout = false;
        this.openServices = false;
        this.openExpertise = false;
        break;
    }
  }
  changeLang(id): any{
    switch (id) {
      case 'eng':
        this.eng = true;
        this.ukr = false;
        this.ru = false;
        break;
      case 'ukr':
        this.eng = false;
        this.ukr = true;
        this.ru = false;
        break;
      case 'ru':
        this.eng = false;
        this.ukr = false;
        this.ru = true;
        break;
    }
  }
  sidebarOpen(): void{
    if (this.openSidebar ){
      this.openSidebar = false;
    } else {
      this.openSidebar = true;
    }
  }
}
