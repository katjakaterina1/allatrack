import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-case-tickbus',
  templateUrl: './usr-case-tickbus.component.html',
  styleUrls: ['./usr-case-tickbus.component.sass']
})
export class UsrCaseTickbusComponent implements OnInit {
  public threeData: any[];
  public sixData: any[];
  public nextData: any[];
  public threeSingleData: any[];
  images: any;
  constructor() { }

  ngOnInit(): void {
    this.threeData = [
      {
        title: '7000',
        text: 'Коливество перевозчиков',
        link: ''
      },
      {
        title: '51',
        text: 'Количество маршрутов',
        link: ''
      },
      {
        title: 'Страны',
        text: 'Украина, польша, блр, …',
        link: ''
      },
    ];
    this.nextData = [
      {
        title: 'Цена',
        text: 'Билет на автобус дешевле, чем на поезд или самолёт. К тому же, для автобусов нет динамического ценообразования, поэтому можно купить билет прямо перед поездкой, и он будет стоить столько же, как и за неделю до поездки',
        link: ''
      },
      {
        title: 'Отсутствие альтернатив',
        text: 'Расстояние между населёнными\n' +
          'пунктами может быть слишком маленьким для ж/д и авиаперевозок.',
        link: ''
      },
      {
        title: 'Комфорт',
        text: 'Автобусы ходят чаще, чем поезда, можно выбрать вариант, подходящий по времени',
        link: ''
      },
    ];
    this.threeSingleData = [
      {
        text: 'Отсутствие единой системы, где хранились бы данные обо\n' +
          'всех перевозчиках и маршрутах. Как следствие — нет единого\n' +
          'расписания. Из-за этого маленькая география онлайн-продаж.',
        link: ''
      },
      {
        text: 'Отсутствие единых стандартов. Пользователь не знает, как\n' +
          'будет выглядеть автобус. Можно привлекать больше\n' +
          'трафика, показывая расписание и подробно рассказывая,\n' +
          'какой именно автобус поедет.',
        link: ''
      },
      {
        text: 'Отсутствие электронного билета. В большинстве случаев\n' +
          'невозможно сесть на автобус по билету, показанному на\n' +
          'смартфоне, нужно его распечатать.',
        link: ''
      }
    ];
    this.sixData = [
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
    this.images = [
      {img: 'tickbus2.png', alt: 'Dashboard screen', size: 'full'},
      {img: 'tickbus3.png', alt: 'Dashboard screen', size: 'short'},
      {img: 'tickbus4.png', alt: 'Dashboard screen', size: 'short'},
      {img: 'tickbus5.png', alt: 'Dashboard screen', size: 'full'},
    ];
  }
}
