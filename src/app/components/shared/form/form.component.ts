import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() isFooter: boolean;
  @Input() white: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
