import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.sass']
})
export class OurServicesComponent implements OnInit {
  @Input() flag: string;
  @Input() title: string;
  @Input() servicesData: any[];
  @Input() linkData: any[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.servicesData);
  }

}
