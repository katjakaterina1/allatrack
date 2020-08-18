import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-case-result',
  templateUrl: './case-result.component.html',
  styleUrls: ['./case-result.component.sass']
})
export class CaseResultComponent implements OnInit {
  @Input() images: any = [];
  @Input() height = false;
  @Input() tabs = false;
  @Input() tabsHeading: string;

  constructor() { }

  ngOnInit(): void {
  }

}
