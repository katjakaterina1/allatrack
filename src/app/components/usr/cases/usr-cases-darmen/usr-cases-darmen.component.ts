import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-cases-darmen',
  templateUrl: './usr-cases-darmen.component.html',
  styleUrls: ['./usr-cases-darmen.component.sass']
})
export class UsrCasesDarmenComponent implements OnInit {
  images: any = [];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {img: 'darmen1.png', alt: 'AR', size: 'full'},
      {img: 'darmen2.png', alt: 'Splash', size: 'short'},
      {img: 'darmen3.png', alt: 'Menu', size: 'short'},
      {img: 'darmen4.png', alt: 'VR', size: 'full'}
    ];
  }
}
