import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-three-columned-block',
  templateUrl: './three-columned-block.component.html',
  styleUrls: ['./three-columned-block.component.sass']
})
export class ThreeColumnedBlockComponent implements OnInit {
  @Input() title: string;
  @Input() figure: string;
  @Input() text: string;
  @Input() numbers = false;
  @Input() threeData: any[];
  @Input() single = false;
  @Input() arrow = false;
  constructor() { }

  ngOnInit(): void {
  }

}
