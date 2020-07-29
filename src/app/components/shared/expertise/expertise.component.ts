import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.sass']
})
export class ExpertiseComponent implements OnInit {
  @Input() header: string;
  @Input() button: string;
  @Input() back: string;
  public firstTab = true;
  public secondTab = false;
  public thirdTab = false;
  public fourthTab = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(index): void {
    switch (index) {
      case 'first':
        this.firstTab = true;
        this.secondTab = false;
        this.thirdTab = false;
        this.fourthTab = false;
        break;
      case 'second':
        this.firstTab = false;
        this.secondTab = true;
        this.thirdTab = false;
        this.fourthTab = false;
        break;
      case 'third':
        this.firstTab = false;
        this.secondTab = false;
        this.thirdTab = true;
        this.fourthTab = false;
        break;
      case 'fourth':
        this.firstTab = false;
        this.secondTab = false;
        this.thirdTab = false;
        this.fourthTab = true;
        break;
    }
  }
}
