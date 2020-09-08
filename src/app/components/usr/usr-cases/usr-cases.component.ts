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
  webCases: any = [];
  saasCases: any = [];
  mobileCases: any = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    this.caseData = [
      {
        caseTitle: 'Eskulabs',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/eskulabs.png',
        fullImage: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        background: '#181818',
        circle: 'display: none',
        darkMode: true,
        route: '/cases/eskulabs',
        section: ['web', 'saas']},
      {
        caseTitle: 'Darmen',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/darmen1.png',
        fullImage: true,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        background: '#F6F6F6',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/darmen',
        section: ['mobile']},
      {
        caseTitle: '2FA',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/fa-bg.png',
        fullImage: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        background: '#FCC546',
        circle: 'right: -900px; top: -380px;',
        darkMode: false,
        route: '/cases/fa',
        section: ['web', 'saas']},
      {
        caseTitle: 'Epicenter ceramic',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/epicenter.png',
        fullImage: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        background: '#181818',
        circle: 'right: -1000px; top: 280px;',
        darkMode: true,
        route: '/cases/epicenter',
        section: ['web']},
      {
        caseTitle: 'Tickfind',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/case1.gif',
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        fullImage: true,
        product: true,
        background: '#E7F2F3',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/tickfind',
        section: ['web']},
      {
        caseTitle: 'Tickbus',
        caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/tickbus.png',
        imageStyles: 'object-fit: contain; margin-top: 127px',
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        fullImage: true,
        product: true,
        background: '#E7F2F3',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/tickbus',
        section: ['web']},
      {
        caseTitle: 'Argentina Grill',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/arg-grill1.png',
        fullImage: true,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        // imageStyles: 'object-fit: contain',
        background: '#FFFCF2',
        circle: 'right: -1000px; top: -280px;',
        darkMode: false,
        route: '/cases/argentina-grill',
        section: ['mobile']},
      {
        caseTitle: 'G-truck',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/gtruck.png',
        background: '#FAFAFA',
        circle: 'background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        route: '/cases/g-truck',
        section: ['mobile', 'web']},
      {
        caseTitle: 'Анализ движения',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/analysis.png',
        background: '#E7F2F3',
        circle: 'right: 100px; top: -280px; background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        route: '/cases/analysis',
        section: ['saas', 'web']},
      {
        caseTitle: 'Track&Trace медикаменти',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/tnt-medicine.jpg',
        background: '#E7F2F3',
        circle: 'right: 100px; top: -280px; background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        route: '/cases/track-and-trace',
        section: ['mobile', 'saas', 'web']},
      {
        caseTitle: 'Track&Trace алкоголь',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/tnt-alcohol.jpg',
        background: '#F2F7FF',
        circle: 'right: 100px; top: -280px; background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        route: '/cases/track-and-trace-alcohol',
        section: ['mobile', 'saas', 'web']},
    ];
    this.caseData.forEach(item => {
      if (this.caseData && item.section.indexOf('web') > -1) {
        this.webCases.push(item);
      }
      if (this.caseData && item.section.indexOf('saas') > -1){
        this.saasCases.push(item);
      }
      if (this.caseData && item.section.indexOf('mobile') > -1){
        this.mobileCases.push(item);
      }
    });
    console.log(this.webCases);
    console.log( this.saasCases);
    console.log(this.mobileCases);
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
