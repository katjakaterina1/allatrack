import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-index',
  templateUrl: './usr-index.component.html',
  styleUrls: ['./usr-index.component.sass']
})
export class UsrIndexComponent implements OnInit {
  public servicesData: any[];
  constructor() { }

  ngOnInit(): void {
    this.servicesData = [
      {
        title: 'Extand your team',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Build your idea',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Management',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
  }
}
