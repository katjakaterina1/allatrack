import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-case-gtruck',
  templateUrl: './usr-case-gtruck.component.html',
  styleUrls: ['./usr-case-gtruck.component.sass']
})
export class UsrCaseGtruckComponent implements OnInit {
  public threeData: any[];
  public threeColunmsData: any[];
  public contentData: any[];
  images: any = [];
  constructor() { }

  ngOnInit(): void {
    this.threeData = [
      {
        title: 'Natural Language Processing',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Computer Vision',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Data Mining and Analytics',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Natural Language Processing',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Computer Vision',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
    ];
    this.threeColunmsData = [
      {
        title: 'Natural Language Processing',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Computer Vision',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Data Mining and Analytics',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
    this.images = [
      {img: 'gtruck1.png', alt: 'Dashboard', size: 'full'},
      {img: 'gtruck2.png', alt: 'Sign up', size: 'short'},
      {img: 'gtruck3.png', alt: 'Sign in', size: 'short'},
      {img: 'gtruck4.png', alt: 'Shipments details (Split view)', size: 'short'},
      {img: 'gtruck5.png', alt: 'Profile', size: 'short'},
      {img: 'gtruck6.png', alt: 'Crate shipment - Route (Set pickup/dropoff date)', size: 'short'},
      {img: 'gtruck7.png', alt: 'Crate shipment - Load', size: 'short'},
      {img: 'gtruck8.png', alt: 'Product page', size: 'full'}
    ];
    this.contentData = [
      {heading: 'СЛИШКОМ МНОГО  ПОСРЕДНИКОВ', problem: 'Автоматизация и оптимизация эффективности бэк-энд процессов в  диджитал маркетинге (интернет  рекламы).', decision: 'Применение алгоритма машинного обучения позволяет:\n' +
          'эффективно противодействовать  нежелательным рекламным кампаниям  (i.e блокировка «ложных кликов» в баннерной рекламе);\n' +
          'анализ схожих изображений позволяет не  показывать одни и те же баннеры на  одной странице.'
      },
      {heading: 'НИЗКИЙ УРОВЕНЬ  СЕРВИСА', decision: 'Разработанная точность определения  подобных изображений 97% Сокращение издержек и времени до 90%'
      },
      {heading: 'ВЫСОКАЯ  ВОЛАТИЛЬНОСТЬ ЗАКАЗОВ', decision: 'Разработанная точность определения  подобных изображений 97% Сокращение издержек и времени до 90%'
      }
    ];
  }

}
