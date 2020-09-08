import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';

@Component({
  selector: 'app-usr-index',
  templateUrl: './usr-index.component.html',
  styleUrls: ['./usr-index.component.sass']
})
export class UsrIndexComponent implements OnInit {
  public servicesData: any[];
  news: any;
  caseData: any;
  aboutData: any;
  expertiseData: any;
  constructor(public newsService: NewsService) { }

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
    this.servicesData = [
      {
        title: 'Extend your team',
        text: 'Improve the development team with experts dedicated to Allatrack',
        button: 'Help me improve',
        link: ''
      },
      {
        title: 'Build your product',
        text: 'Support your operations with a custom-built application',
        button: 'Build my product',
        link: ''
      },
      {
        title: 'Management',
        text: 'Free up your team’s time with our Managed Support',
        button: 'Scale my business',
        link: ''
      }
    ];
    this.aboutData = {
      heading: 'Inspiration for organizations to bring creative ideas to life',
      paragraph: 'Thanks to the individual approach to each client, the Allatrack development team uses the most advanced methods of managing resources and processes when creating software, while providing the Customer with a high-quality software product.',
      columns: [
        {title: '6 Years', description: 'We work successfully in the market'},
        {title: '35 projects', description: 'Allatrack team successfully implemented high-tech projects'},
        {title: '40%', description: 'Saving campaign budget thanks to machine learning algorithms'},
      ]
    };
    this.newsService.load().subscribe(data => {
      this.news = data;
    });
  }
}
