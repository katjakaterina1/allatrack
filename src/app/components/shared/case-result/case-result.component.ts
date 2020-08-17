import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-case-result',
  templateUrl: './case-result.component.html',
  styleUrls: ['./case-result.component.sass']
})
export class CaseResultComponent implements OnInit {
  @Input() images: any = [];
  @Input() height = false;

  constructor() { }

  ngOnInit(): void {
  }

}
