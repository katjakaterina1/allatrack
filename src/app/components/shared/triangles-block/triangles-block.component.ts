import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-triangles-block',
  templateUrl: './triangles-block.component.html',
  styleUrls: ['./triangles-block.component.sass']
})
export class TrianglesBlockComponent implements OnInit {
  @Input() title: string;
  @Input() single: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
