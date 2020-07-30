import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.sass']
})
export class HeadingComponent implements OnInit {
  @Input() title: string;
  @Input() hashtag: string;
  @Input() needSocial = false;
  @Input() needCircle = true;
  @Input() backgroundColor: string;
  @Input() top: string;
  @Input() right: string;
  @Input() containerPadding: string;
  @Input() hasDownloadButton = false;
  @Input() hasContactButton = true;
  @Input() hasSocial = true;
  @Input() needBackButton: string;
  @Input() buttonLink: string;
  @Input() needForm = false;
  constructor() { }

  ngOnInit(): void {
  }

}
