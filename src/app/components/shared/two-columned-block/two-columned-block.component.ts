import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-columned-block',
  templateUrl: './two-columned-block.component.html',
  styleUrls: ['./two-columned-block.component.sass']
})
export class TwoColumnedBlockComponent implements OnInit {
  @Input() heading1 = 'Проблемы';
  @Input() heading2 = 'Решения';
  @Input() contentData: any;
  @Input() withoutBorder = false;
  constructor() { }

  ngOnInit(): void {
  }

}
