import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-case-single',
  templateUrl: './usr-case-single.component.html',
  styleUrls: ['./usr-case-single.component.sass']
})
export class UsrCaseSingleComponent implements OnInit {
  public threeData: any[];
  public nextData: any[];
  public fourData: any[];
  images: any;
  constructor() { }

  ngOnInit(): void {
    this.threeData = [
      {
        text: 'Квоторирование билетов и отсутствие свободной продажи, нету вторичного рынка  билетовm',
        link: ''
      },
      {
        text: 'Билетные операторы – посредники между организаторами и пользователями.',
        link: ''
      },
      {
        text: 'Доступ к концертам в настоящее время ограничен небольшой аудиторией.',
        link: ''
      },
      {
        text: 'Хотя посещаемость концертов выросла на 26%, билеты на 24 миллиарда долларов не продаются каждый год. Это не из-за отсутствия интереса. Это проблема рекомендаций.\n',
        link: ''
      },
      {
        text: 'Отсутствие прозрачной коммуникации  между брокерами.',
        link: ''
      },
      {
        text: 'Риск для брокера не продать все билеты',
        link: ''
      },
    ];
    this.nextData = [
      {
        title: 'StubHub Integration',
        text: 'Real-time inventory broadcast without the need for “Large Seller” status. Features like PDF/Barcode pre-delivery, historical sales data, and integrated pricing tools provide more effective StubHub listing management.',
        link: ''
      },
      {
        title: 'Решение по анализу данных и ценообразованию',
        text: 'A next generation cloud based auto up loader, fully integrated with our Point of Sale.',
        link: ''
      },
      {
        title: 'Ticketmaster Integration',
        text: 'List your resale tickets direct to Ticketmaster and its resale exchanges for professional football, hockey and basketball at no extra cost.',
        link: ''
      },
    ];
    this.fourData = [
      {
        text: 'Социальная сеть, в которой можно поделиться c близкими друзьями интересными местами для посещения, ивентами или другими способами занять время',
        link: ''
      },
      {
        text: 'Сервис рекомендаций для поиска мероприятий, контента и впечатлений',
        link: ''
      },
      {
        text: 'Live трансляции и Stories',
        link: ''
      },
      {
        text: 'Marketplace и Агрегатор билетов',
        link: ''
      },
    ];
    this.images = [
      {img: 'tickfind1.png', alt: 'Home screen', size: 'full'},
      {img: 'tickfind2.png', alt: 'Dashboard screen', size: 'short'},
      {img: 'tickfind3.png', alt: 'Dashboard screen', size: 'short'},
      {img: 'tickfind4.png', alt: 'Dashboard screen', size: 'full'}
    ];
  }

}
