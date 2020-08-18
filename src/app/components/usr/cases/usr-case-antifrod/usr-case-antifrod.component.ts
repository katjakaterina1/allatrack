import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-case-antifrod',
  templateUrl: './usr-case-antifrod.component.html',
  styleUrls: ['./usr-case-antifrod.component.sass']
})
export class UsrCaseAntifrodComponent implements OnInit {
  contentData: any = [];
  constructor() { }

  ngOnInit(): void {
    this.contentData = [
      {heading: 'Анти-плагиат Решение в рекламных кампаниях', problem: 'Автоматизация и оптимизация эффективности бэк-энд процессов в  диджитал маркетинге (интернет  рекламы).', decision: 'Применение алгоритма машинного обучения позволяет:\n' +
          'эффективно противодействовать  нежелательным рекламным кампаниям  (i.e блокировка «ложных кликов» в баннерной рекламе);\n' +
          'анализ схожих изображений позволяет не  показывать одни и те же баннеры на  одной странице.'
      },
      {heading: 'Оптимизация таргетирования рекламы', decision: 'Разработанная точность определения  подобных изображений 97% Сокращение издержек и времени до 90%'
      }
    ];
  }

}
