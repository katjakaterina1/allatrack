import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.sass']
})
export class BlogSectionComponent implements OnInit {
  @Input() heading: string;
  @Input() button: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
