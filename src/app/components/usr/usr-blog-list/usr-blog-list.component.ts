import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-usr-blog-list',
  templateUrl: './usr-blog-list.component.html',
  styleUrls: ['./usr-blog-list.component.sass']
})
export class UsrBlogListComponent implements AfterViewInit, OnInit {
  tabs: any;
  constructor() { }

  ngOnInit(): void {
    this.tabs = [
      'Latest',
      'Retail & Distribution',
      'Big data and AI',
      'Design',
      'Android',
      'iOs',
      'AI',
      'Finance',
      'TRAVEL & HOSPITALITY',
      ' SOFTWARE & HI-TECH',
      'BLOCKCHAIN TECHNOLOGIES',
      'INSURANCE',
      'INTERNET OF THINGS'
      ];
  }
  ngAfterViewInit(): void {
    document.getElementById(`tab-0`).classList.add('active');
  }
  setActive(i): any{
    const els = document.querySelectorAll('.blog__tabs_heading_single');
    for (let j = 0; j < this.tabs.length; j++) {
      els[j].classList.remove('active');
    }
    document.getElementById(`tab-${i}`).classList.add('active');
  }

}
