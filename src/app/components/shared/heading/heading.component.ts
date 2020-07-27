import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.sass']
})
export class HeadingComponent implements OnInit {
  @Input() title: string;
  @Input() backgroundColor: string;
  @Input() hasDownloadButton = false;
  constructor() { }

  ngOnInit(): void {
  }

}
