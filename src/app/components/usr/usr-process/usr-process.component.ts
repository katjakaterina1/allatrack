import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-process',
  templateUrl: './usr-process.component.html',
  styleUrls: ['./usr-process.component.sass']
})
export class UsrProcessComponent implements OnInit {
  public servicesData: any[];
  constructor() { }

  ngOnInit(): void {
    this.servicesData = [
      {
        title: 'Extend your team',
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
