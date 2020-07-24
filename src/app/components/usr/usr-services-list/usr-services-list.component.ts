import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-services-list',
  templateUrl: './usr-services-list.component.html',
  styleUrls: ['./usr-services-list.component.sass']
})
export class UsrServicesListComponent implements OnInit {
  public servicesData: any[];
  constructor() { }

  ngOnInit(): void {
    this.servicesData = [
      {
        title: 'Blockchain (DLT)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Cognitive Computing (AI / ML)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Data, BI and Analytics',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Internet of Things (IoT)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Customer Experience (UX / UI)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Cloud & DevOps',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
  }

}
