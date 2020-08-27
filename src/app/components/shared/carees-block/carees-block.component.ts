import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-carees-block',
  templateUrl: './carees-block.component.html',
  styleUrls: ['./carees-block.component.sass']
})
export class CareesBlockComponent implements OnInit {
  all: any = true;
  back: any;
  front: any;
  designer: any;
  devops: any;
  management: any;
  marketing: any;
  business: any;
  @Input() data: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
  }
  changeTab(tab: any): void {
    switch (tab) {
      case 'all':
        this.all = true;
        this.back = false;
        this.front = false;
        this.designer = false;
        this.devops = false;
        this.management = false;
        this.marketing = false;
        this.business = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(0)';
        }
        break;
      case 'back':
        this.all = false;
        this.back = true;
        this.front = false;
        this.designer = false;
        this.devops = false;
        this.management = false;
        this.marketing = false;
        this.business = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(100%)';
        }
        break;
      case 'front':
        this.all = false;
        this.back = false;
        this.front = true;
        this.designer = false;
        this.devops = false;
        this.management = false;
        this.marketing = false;
        this.business = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(200%)';
        }
        break;
      case 'designer':
        this.all = false;
        this.back = false;
        this.front = false;
        this.designer = true;
        this.devops = false;
        this.management = false;
        this.marketing = false;
        this.business = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(300%)';
        }
        break;
      case 'devops':
        this.all = false;
        this.back = false;
        this.front = false;
        this.designer = false;
        this.devops = true;
        this.management = false;
        this.marketing = false;
        this.business = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(400%)';
        }
        break;
      case 'management':
        this.all = false;
        this.back = false;
        this.front = false;
        this.designer = false;
        this.devops = false;
        this.management = true;
        this.marketing = false;
        this.business = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(500%)';
        }
        break;
      case 'marketing':
        this.all = false;
        this.back = false;
        this.front = false;
        this.designer = false;
        this.devops = false;
        this.management = false;
        this.marketing = true;
        this.business = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(600%)';
        }
        break;
      case 'business':
        this.all = false;
        this.back = false;
        this.front = false;
        this.designer = false;
        this.devops = false;
        this.management = false;
        this.marketing = false;
        this.business = true;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(700%)';
        }
        break;
    }
  }
}
