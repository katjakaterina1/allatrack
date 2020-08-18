import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-case-single',
  templateUrl: './usr-case-single.component.html',
  styleUrls: ['./usr-case-single.component.sass']
})
export class UsrCaseSingleComponent implements OnInit {
  public threeData: any[];
  images: any;
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
    ];
    this.images = [
      {img: 'case1.gif', alt: 'Home screen', size: 'full'},
      {img: 'case1.gif', alt: 'Dashboard screen', size: 'short'},
      {img: 'case2.gif', alt: 'Dashboard screen', size: 'short'},
      {img: 'case2.gif', alt: 'Dashboard screen', size: 'short'},
      {img: 'phone.gif', alt: 'Dashboard screen', size: 'short'},
      {img: 'case2.gif', alt: 'Dashboard screen', size: 'rect'}
    ];
  }

}
