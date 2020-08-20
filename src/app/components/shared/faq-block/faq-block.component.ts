import {Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-faq-block',
  templateUrl: './faq-block.component.html',
  styleUrls: ['./faq-block.component.sass']
})
export class FaqBlockComponent implements OnInit {
  active: any = true;
  questions: any = [1, 2, 3, 4, 5];
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
  }
  openQuestion(i): void{
    let els;
    if (isPlatformBrowser(this.platformId)) {
      els = document.querySelectorAll('.faq__questions_single');
    }
    for (let j = 0; j < this.questions.length; j++) {
      els[j].classList.remove('active');
    }
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(`question-${i}`).classList.add('active');
    }
  }

}
