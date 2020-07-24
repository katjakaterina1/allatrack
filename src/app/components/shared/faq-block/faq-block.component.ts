import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-faq-block',
  templateUrl: './faq-block.component.html',
  styleUrls: ['./faq-block.component.sass']
})
export class FaqBlockComponent implements OnInit {
  active: any = true;
  questions: any = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }
  openQuestion(i): void{
    const els = document.querySelectorAll('.faq__questions_single');
    for (let j = 0; j < this.questions.length; j++) {
      els[j].classList.remove('active');
    }
    document.getElementById(`question-${i}`).classList.add('active');
  }

}
