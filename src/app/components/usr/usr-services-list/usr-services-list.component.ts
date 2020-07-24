import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-services-list',
  templateUrl: './usr-services-list.component.html',
  styleUrls: ['./usr-services-list.component.sass']
})
export class UsrServicesListComponent implements OnInit {
  public servicesData: any[];
  public threeData: any[];
  constructor() { }

  ngOnInit(): void {
    this.threeData = [
      {
        title: 'Software Product Development',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Mobile Application Development',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Web services development',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'R&D and innovation',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Software QA & Testing',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Technical Support',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
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
