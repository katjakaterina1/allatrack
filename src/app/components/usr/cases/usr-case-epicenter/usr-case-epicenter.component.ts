import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-case-epicenter',
  templateUrl: './usr-case-epicenter.component.html',
  styleUrls: ['./usr-case-epicenter.component.sass']
})
export class UsrCaseEpicenterComponent implements OnInit {
  public threeData: any[];
  images: any = [];
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
      {img: 'epicenter1.png', alt: 'Home screen', size: 'full'},
      {img: 'epicenter2.png', alt: 'Catalog by collections', size: 'short'},
      {img: 'epicenter3.png', alt: 'Catalog by tiles', size: 'short'},
      {img: 'epicenter4.png', alt: 'Where could I buy', size: 'short'},
      {img: 'epicenter5.png', alt: 'Completed projects', size: 'short'},
      {img: 'epicenter6.png', alt: 'Product page', size: 'full'},
    ];
  }

}
