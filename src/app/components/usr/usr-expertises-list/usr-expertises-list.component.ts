import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-expertises-list',
  templateUrl: './usr-expertises-list.component.html',
  styleUrls: ['./usr-expertises-list.component.sass']
})
export class UsrExpertisesListComponent implements OnInit {
  public servicesData: any[];
  constructor() { }

  ngOnInit(): void {
    this.servicesData = [
      {
        title: 'Expand your team',
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
