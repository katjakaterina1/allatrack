import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-expertise-single',
  templateUrl: './usr-expertise-single.component.html',
  styleUrls: ['./usr-expertise-single.component.sass']
})
export class UsrExpertiseSingleComponent implements OnInit {
  public threeData: any[];
  constructor() { }

  ngOnInit(): void {
    this.threeData = [
      {
        title: 'Natural Language Processing',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Computer Vision',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Data Mining and Analytics',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Natural Language Processing',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Computer Vision',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Data Mining and Analytics',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
  }

}
