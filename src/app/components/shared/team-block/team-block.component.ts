import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-team-block',
  templateUrl: './team-block.component.html',
  styleUrls: ['./team-block.component.sass']
})
export class TeamBlockComponent implements OnInit {

  all: any = true;
  devops: any;
  designers: any;
  frontends: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
  }
  changeTab(tab: any): void {
    switch (tab) {
      case 'all':
        this.all = true;
        this.devops = false;
        this.designers = false;
        this.frontends = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(0)';
        }
        break;
      case 'devops':
        this.all = false;
        this.devops = true;
        this.designers = false;
        this.frontends = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(100%)';
        }
        break;
      case 'designers':
        this.all = false;
        this.devops = false;
        this.designers = true;
        this.frontends = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(200%)';
        }
        break;
      case 'frontends':
        this.all = false;
        this.devops = false;
        this.designers = false;
        this.frontends = true;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(300%)';
        }
        break;
    }
  }
}
