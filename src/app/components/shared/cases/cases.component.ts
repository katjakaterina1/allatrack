import {AfterViewInit, Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() needMargin = true;
  @Input() needTitle = true;
  @Input() needExtraTabs: boolean;
  @Input() title: string;
  @Input() caseData: any;
  @Input() image: string;
  @Input() backgroundColor: string;
  cases: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  casesInterval: any;
  casesTimeout: any;
  clearedInterval: boolean;
  clearedTimeout: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    this.caseData = [
      {
        caseTitle: 'Eskulabs',
        shortTitle: 'Eskulabs',
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
        shortTitle: 'Darmen',
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
        shortTitle: '2FA',
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
        shortTitle: 'Epicenter ceramic',
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
        shortTitle: 'Tickfind',
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
        shortTitle: 'Tickbus',
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
        shortTitle: 'Argentina Grill',
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
        shortTitle: 'G-truck',
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
        shortTitle: 'Анализ движения',
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
        shortTitle: 'T&T медикаменти',
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
        shortTitle: 'T&T алкоголь',
        caseTags: ['iOs', 'Design', 'AI'],
        caseImage: '/assets/images/tnt-alcohol.jpg',
        background: '#F2F7FF',
        circle: 'right: 100px; top: -280px; background-image: url("/assets/images/bg.gif")',
        darkMode: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        route: '/cases/track-and-trace-alcohol',
        section: ['mobile', 'saas', 'web']},
    ];
    if (this.needExtraTabs) {
      clearInterval(this.casesInterval);
      clearTimeout(this.casesTimeout);
    }
    this.clearedInterval = false;
    this.clearedTimeout = false;
  }
  ngAfterViewInit(): void {
    if (this.needExtraTabs) {
      this.selectElement();
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.casesInterval);
    clearTimeout(this.casesTimeout);
    this.clearedInterval = true;
    this.clearedTimeout = true;
  }
  selectElement(): void {
    let els;
    let blocks;
    if (isPlatformBrowser(this.platformId)) {
      els = document.querySelectorAll('.projects__all_single');
      blocks = document.querySelectorAll('.projects__block');
    }
    if (els && blocks){
      for (let i = 0; i < this.cases.length; i++) {
        this.casesTimeout = setTimeout( () => {
          if (!this.clearedTimeout) {
            for (let j = 0; j < this.cases.length; j++) {
              // tslint:disable-next-line:no-unused-expression
              els[j] && els[j].classList.remove('selected');
              // tslint:disable-next-line:no-unused-expression
              blocks[j] && blocks[j].classList.remove('selected');
            }
            let elem;
            let block;
            if (isPlatformBrowser(this.platformId)) {
              elem = document.getElementById(`case-${i}`);
              block = document.getElementById(`block-${i}`);
            }
            // tslint:disable-next-line:no-unused-expression
            elem && elem.classList.add('selected');
            // tslint:disable-next-line:no-unused-expression
            block && block.classList.add('selected');
          }
        }, 5000 * i); // <-- You need to multiply by i here.
      }
      this.casesInterval = setInterval(() => {
        if (!this.clearedInterval) {
          this.selectElement();
        }
      }, 5000 * this.cases.length);
    }
  }
}
