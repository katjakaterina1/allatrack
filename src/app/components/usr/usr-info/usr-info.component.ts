import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-info',
  templateUrl: './usr-info.component.html',
  styleUrls: ['./usr-info.component.sass']
})
export class UsrInfoComponent implements OnInit {
  public firstTab = true;
  public secondTab = false;
  public thirdTab = false;
  public fourthTab = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(index) {
    switch (index) {
      case 'first':
        this.firstTab = true;
        this.secondTab = false;
        this.thirdTab = false;
        this.fourthTab = false;
        break;
      case 'second':
        this.firstTab = false;
        this.secondTab = true;
        this.thirdTab = false;
        this.fourthTab = false;
        break;
      case 'third':
        this.firstTab = false;
        this.secondTab = false;
        this.thirdTab = true;
        this.fourthTab = false;
        break;
      case 'fourth':
        this.firstTab = false;
        this.secondTab = false;
        this.thirdTab = false;
        this.fourthTab = true;
        break;
    }
  }

}
