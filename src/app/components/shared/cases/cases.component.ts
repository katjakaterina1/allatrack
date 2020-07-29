import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements AfterViewInit, OnInit {
  @Input() needMargin = true;
  @Input() needTitle = true;
  @Input() needExtraTabs: boolean;
  @Input() title: string;
  @Input() image: string;
  @Input() backgroundColor: string;
  cases: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.selectElement();
  }
  selectElement(): void {
    const els = document.querySelectorAll('.projects__all_single');
    const blocks = document.querySelectorAll('.projects__block');
    if (els && blocks){
      for (let i = 0; i < this.cases.length; i++) {
        (i => {
          setTimeout( () => {
            for (let j = 0; j < this.cases.length; j++) {
              els[j].classList.remove('selected');
              blocks[j].classList.remove('selected');
            }
            const elem = document.getElementById(`case-${i}`);
            const block = document.getElementById(`block-${i}`);
            elem.classList.add('selected');
            block.classList.add('selected');
          }, 5000 * i); // <-- You need to multiply by i here.
        })(i);
      }
      setInterval(() => {
        this.selectElement();
      }, 5000 * this.cases.length);
    }

  }
}
