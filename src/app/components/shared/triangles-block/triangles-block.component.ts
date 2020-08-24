import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-triangles-block',
  templateUrl: './triangles-block.component.html',
  styleUrls: ['./triangles-block.component.sass']
})
export class TrianglesBlockComponent implements OnInit {
  @Input() title: string;
  @Input() text = 'Allatrack is a young and progressive IT company that provides a full range of services in the field of data analysis and software development of any complexity. To each client an individual approach, depending on the specifics of the business.';
  @Input() single = true;
  @Input() columns = false;
  @Input() fourData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
