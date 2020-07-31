import {AfterViewInit, Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() needMargin = true;
  @Input() needTitle = true;
  @Input() needExtraTabs: boolean;
  @Input() title: string;
  @Input() image: string;
  @Input() backgroundColor: string;
  cases: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  casesInterval: any;
  casesTimeout: any;
  clearedInterval: boolean;
  clearedTimeout: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.needExtraTabs) {
      clearInterval(this.casesInterval);
      clearTimeout(this.casesTimeout);
    }
    this.clearedInterval = false;
    this.clearedTimeout = false;
  }
  ngAfterViewInit(): void {
    if (this.needExtraTabs) {
      this.selectElement();
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.casesInterval);
    clearTimeout(this.casesTimeout);
    this.clearedInterval = true;
    this.clearedTimeout = true;
  }
  selectElement(): void {
    const els = document.querySelectorAll('.projects__all_single');
    const blocks = document.querySelectorAll('.projects__block');
    if (els && blocks){
      for (let i = 0; i < this.cases.length; i++) {
        this.casesTimeout = setTimeout( () => {
          if (!this.clearedTimeout) {
            for (let j = 0; j < this.cases.length; j++) {
              // tslint:disable-next-line:no-unused-expression
              els[j] && els[j].classList.remove('selected');
              // tslint:disable-next-line:no-unused-expression
              blocks[j] && blocks[j].classList.remove('selected');
            }
            const elem = document.getElementById(`case-${i}`);
            const block = document.getElementById(`block-${i}`);
            // tslint:disable-next-line:no-unused-expression
            elem && elem.classList.add('selected');
            // tslint:disable-next-line:no-unused-expression
            block && block.classList.add('selected');
          }
        }, 5000 * i); // <-- You need to multiply by i here.
      }
      this.casesInterval = setInterval(() => {
        if (!this.clearedInterval) {
          this.selectElement();
        }
      }, 5000 * this.cases.length);
    }
  }
}
