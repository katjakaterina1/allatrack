import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages-slider',
  templateUrl: './stages-slider.component.html',
  styleUrls: ['./stages-slider.component.sass']
})
export class StagesSliderComponent implements OnInit {
  firstStep: any;
  secondStep: any;
  thirdStep: any;
  fourthStep: any;
  constructor() { }
  ngOnInit(): void {
    this.runSlider();
  }
  runSlider(): void {
    setTimeout(() => {
      this.firstStep = true;
      this.secondStep = false;
      this.thirdStep = false;
      this.fourthStep = false;
    }, 0);
    setTimeout(() => {
      this.firstStep = false;
      this.secondStep = true;
      this.thirdStep = false;
      this.fourthStep = false;
    }, 5000);
    setTimeout(() => {
      this.firstStep = false;
      this.secondStep = false;
      this.thirdStep = true;
      this.fourthStep = false;
    }, 10000);
    setTimeout(() => {
      this.firstStep = false;
      this.secondStep = false;
      this.thirdStep = false;
      this.fourthStep = true;
    }, 15000);
    setTimeout(() => {
      this.runSlider();
    }, 20000);
  }
}
