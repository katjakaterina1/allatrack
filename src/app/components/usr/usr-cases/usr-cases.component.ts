import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-usr-cases',
  templateUrl: './usr-cases.component.html',
  styleUrls: ['./usr-cases.component.sass']
})
export class UsrCasesComponent implements OnInit {
  cloud: any = true;
  web: any;
  mobile: any;
  analyze: any;
  caseData: any;
  otherCases: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    this.caseData = [
      {
        caseTitle: 'TiPaymium modern and smart mobile payment system powered on AI. ',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/phone.gif',
        fullImage: true,
        background: '#FAFAFA',
        circle: '',
        darkMode: false,
        route: ''},
      {
        caseTitle: 'Eskulabs',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/eskulabs.png',
        fullImage: false,
        background: '#181818',
        circle: 'display: none',
        darkMode: true,
        route: '/cases/eskulabs'},
      {
        caseTitle: 'Tickfind',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/case1.gif',
        fullImage: true,
        background: '#E7F2F3',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/tickfind'},
      {
        caseTitle: '2FA',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/fa-bg.png',
        fullImage: false,
        background: '#FCC546',
        circle: 'right: -900px; top: -380px;',
        darkMode: false,
        route: '/cases/fa'},
      {
        caseTitle: 'Epicenter ceramic',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/epicenter.png',
        fullImage: false,
        background: '#181818',
        circle: 'right: -1000px; top: 280px;',
        darkMode: true,
        route: '/cases/epicenter'},
      {
        caseTitle: 'Argentina Grill',
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
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/gtruck.png',
        background: '#FAFAFA',
        circle: 'background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        route: '/cases/g-truck'},
      {
        caseTitle: 'Анализ движения',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/analysis.png',
        background: '#E7F2F3',
        circle: 'right: 100px; top: -280px; background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        route: '/cases/analysis'},
    ];
    this.otherCases = [
      {
        title: 'Анти-плагиат',
        caseTags: ['iOs', 'Design', 'AI'],
        route: '/cases/anti-plagiat'
      },
      {
        title: 'Антифрод',
        caseTags: ['iOs', 'Design', 'AI'],
        route: '/cases/antifrod'
      },
      {
        title: 'Идентификация животных',
        caseTags: ['iOs', 'Design', 'AI'],
        route: '/cases/animals'
      },
      {
        title: 'CRM оптимизация',
        caseTags: ['iOs', 'Design', 'AI'],
        route: '/cases/crm-optimization'
      },
      {
        title: 'VR строитель',
        caseTags: ['iOs', 'Design', 'AI'],
        route: '/cases/vr-builder'
      },
    ];
  }
  changeTab(tab: any): void {
    switch (tab) {
      case 'cloud':
        this.cloud = true;
        this.web = false;
        this.mobile = false;
        this.analyze = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(0)';
        }
        break;
      case 'web':
        this.cloud = false;
        this.web = true;
        this.mobile = false;
        this.analyze = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(100%)';
        }
        break;
      case 'mobile':
        this.cloud = false;
        this.web = false;
        this.mobile = true;
        this.analyze = false;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(200%)';
        }
        break;
      case 'analyze':
        this.cloud = false;
        this.web = false;
        this.mobile = false;
        this.analyze = true;
        if (isPlatformBrowser(this.platformId)) {
          document.getElementById('line__fill').style.transform = 'translateX(300%)';
        }
        break;
    }
  }
}
