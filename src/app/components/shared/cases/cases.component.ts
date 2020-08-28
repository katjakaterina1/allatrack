import {AfterViewInit, Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

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
  @Input() caseData: any;
  @Input() image: string;
  @Input() backgroundColor: string;
  cases: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  casesInterval: any;
  casesTimeout: any;
  clearedInterval: boolean;
  clearedTimeout: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

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
    let els;
    let blocks;
    if (isPlatformBrowser(this.platformId)) {
      els = document.querySelectorAll('.projects__all_single');
      blocks = document.querySelectorAll('.projects__block');
    }
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
            let elem;
            let block;
            if (isPlatformBrowser(this.platformId)) {
              elem = document.getElementById(`case-${i}`);
              block = document.getElementById(`block-${i}`);
            }
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
