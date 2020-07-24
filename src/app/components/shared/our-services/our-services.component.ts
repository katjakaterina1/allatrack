import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.sass']
})
export class OurServicesComponent implements OnInit {
  @Input() title: string;
  @Input() servicesData: any[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.servicesData);
  }

}
