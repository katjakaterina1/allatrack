import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements OnInit {
  @Input() needMargin = true;
  @Input() needTitle = true;
  @Input() needExtraTabs: boolean;
  @Input() title: string;
  @Input() image: string;
  @Input() backgroundColor: string;
  constructor() { }

  ngOnInit(): void {
  }
}
