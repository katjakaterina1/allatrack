import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-services-list',
  templateUrl: './usr-services-list.component.html',
  styleUrls: ['./usr-services-list.component.sass']
})
export class UsrServicesListComponent implements OnInit {
  public servicesData: any[];
  public threeData: any[];
  public caseData: any;
  constructor() { }

  ngOnInit(): void {
    this.caseData = [
      {
        caseTitle: 'TiPaymium modern and smart mobile payment system powered on AI. ',
        shortTitle: 'TiPaymium',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/phone.gif',
        product: true,
        fullImage: true,
        background: '#FAFAFA',
        circle: '',
        darkMode: false,
        route: ''},
      {
        caseTitle: 'Eskulabs',
        shortTitle: 'Eskulabs',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/eskulabs.png',
        fullImage: false,
        background: '#181818',
        circle: 'display: none',
        darkMode: true,
        route: '/cases/eskulabs'},
      {
        caseTitle: '2FA',
        shortTitle: '2FA',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/fa-bg.png',
        fullImage: false,
        background: '#FCC546',
        circle: 'right: -900px; top: -380px;',
        darkMode: false,
        route: '/cases/fa'},
      {
        caseTitle: 'Epicenter ceramic',
        shortTitle: 'Epicenter ceramic',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/epicenter.png',
        fullImage: false,
        background: '#181818',
        circle: 'right: -1000px; top: 280px;',
        darkMode: true,
        route: '/cases/epicenter'},
      {
        caseTitle: 'Argentina Grill',
        shortTitle: 'Argentina Grill',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/arg-grill1.png',
        fullImage: true,
        // imageStyles: 'object-fit: contain',
        background: '#FFFCF2',
        circle: 'right: -1000px; top: -280px;',
        darkMode: false,
        route: '/cases/argentina-grill'},
      {
        caseTitle: 'G-truck',
        shortTitle: 'G-truck',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/gtruck.png',
        background: '#FAFAFA',
        circle: 'background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        route: '/cases/g-truck'},
      {
        caseTitle: 'Анализ движения',
        shortTitle: 'Анализ движения',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/analysis.png',
        background: '#E7F2F3',
        circle: 'right: 100px; top: -280px; background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        route: '/cases/analysis'},
      {
        caseTitle: 'Tickbus',
        shortTitle: 'Tickbus',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/tickbus.png',
        imageStyles: 'object-fit: contain; margin-top: 127px',
        fullImage: true,
        product: true,
        background: '#E7F2F3',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/tickbus'},
      {
        caseTitle: 'Tickfind',
        shortTitle: 'Tickfind',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/case1.gif',
        fullImage: true,
        product: true,
        background: '#E7F2F3',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/tickfind'},
    ];
    this.threeData = [
      {
        title: 'Software Product Development',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Mobile Application Development',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Web services development',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'R&D and innovation',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Software QA & Testing',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Technical Support',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
    this.servicesData = [
      {
        title: 'Blockchain (DLT)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Cognitive Computing (AI / ML)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Data, BI and Analytics',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Internet of Things (IoT)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Customer Experience (UX / UI)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Cloud & DevOps',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
  }
}
