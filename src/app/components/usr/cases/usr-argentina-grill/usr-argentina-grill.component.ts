import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-argentina-grill',
  templateUrl: './usr-argentina-grill.component.html',
  styleUrls: ['./usr-argentina-grill.component.sass']
})
export class UsrArgentinaGrillComponent implements OnInit {
  images: any = [];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {img: 'arg-grill1.png', alt: 'AR', size: 'full'},
      {img: 'arg-grill2.png', alt: 'Splash', size: 'short'},
      {img: 'arg-grill3.png', alt: 'Menu', size: 'short'},
      {img: 'arg-grill4.png', alt: 'VR', size: 'full'}
    ];
  }

}
