import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-block',
  templateUrl: './tabs-block.component.html',
  styleUrls: ['./tabs-block.component.sass']
})
export class TabsBlockComponent implements OnInit {
  cloud: any = true;
  web: any;
  mobile: any;
  analyze: any;
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tab: any): void {
    switch (tab) {
      case 'cloud':
        this.cloud = true;
        this.web = false;
        this.mobile = false;
        this.analyze = false;
        document.getElementById('line__fill').style.transform = 'translateX(0)';
        break;
      case 'web':
        this.cloud = false;
        this.web = true;
        this.mobile = false;
        this.analyze = false;
        document.getElementById('line__fill').style.transform = 'translateX(100%)';
        break;
      case 'mobile':
        this.cloud = false;
        this.web = false;
        this.mobile = true;
        this.analyze = false;
        document.getElementById('line__fill').style.transform = 'translateX(200%)';
        break;
      case 'analyze':
        this.cloud = false;
        this.web = false;
        this.mobile = false;
        this.analyze = true;
        document.getElementById('line__fill').style.transform = 'translateX(300%)';
        break;
    }
  }

}
