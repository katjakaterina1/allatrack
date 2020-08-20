import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-usr-cases',
  templateUrl: './usr-cases.component.html',
  styleUrls: ['./usr-cases.component.sass']
})
export class UsrCasesComponent implements OnInit {
  cloud: any = true;
  web: any;
  mobile: any;
  analyze: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
  }
  changeTab(tab: any): void {
    switch (tab) {
      case 'cloud':
        this.cloud = true;
        this.web = false;
        this.mobile = false;
        this.analyze = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(0)';
        }
        break;
      case 'web':
        this.cloud = false;
        this.web = true;
        this.mobile = false;
        this.analyze = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(100%)';
        }
        break;
      case 'mobile':
        this.cloud = false;
        this.web = false;
        this.mobile = true;
        this.analyze = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(200%)';
        }
        break;
      case 'analyze':
        this.cloud = false;
        this.web = false;
        this.mobile = false;
        this.analyze = true;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(300%)';
        }
        break;
    }
  }
}
