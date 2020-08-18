import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-case-animals',
  templateUrl: './usr-case-animals.component.html',
  styleUrls: ['./usr-case-animals.component.sass']
})
export class UsrCaseAnimalsComponent implements OnInit {
  contentData: any[];
  constructor() { }

  ngOnInit(): void {
    this.contentData = [
      {heading: 'Обеспечить', problem: 'o  Своевременную автоматизированную  идентификацию; o  Контроль вакцинации;o  Контроль забора крови;o  Получение данных с отдаленных  сельских округов (без доступа к  интернету); o  Своевременное проведение проф.  мероприятий', decision: 'o  Потерю времени; \n' +
          'o  Потерю информации; \n' +
          'o  Искажение данных.', secondHeading: 'Сократить'}
    ];
  }

}
