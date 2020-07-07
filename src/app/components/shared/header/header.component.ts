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
  constructor() { }

  ngOnInit(): void {
  }
  openDropdown(id){
    switch (id) {
      case 'about':
        this.openAbout = true;
        this.openServices = false;
        this.openExpertise = false;
        console.log('about');
        break;
      case 'services':
        this.openAbout = false;
        this.openServices = true;
        this.openExpertise = false;
        console.log('services');
        break;
      case 'expertise':
        this.openAbout = false;
        this.openServices = false;
        this.openExpertise = true;
        console.log('expertise');
        break;
      case 'close':
        this.openAbout = false;
        this.openServices = false;
        this.openExpertise = false;
        console.log('close');
        break;
    }

  }
}
