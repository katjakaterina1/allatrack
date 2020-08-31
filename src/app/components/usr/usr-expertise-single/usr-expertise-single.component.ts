import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';

@Component({
  selector: 'app-usr-expertise-single',
  templateUrl: './usr-expertise-single.component.html',
  styleUrls: ['./usr-expertise-single.component.sass']
})
export class UsrExpertiseSingleComponent implements OnInit {
  public threeData: any[];
  public servicesData: any[];
  public linkedData: any[];
  news: any;
  caseData: any;
  constructor(public newsService: NewsService) { }

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
        title: 'Natural Language Processing',
        text: 'Advanced texts, speech, and cognitive analytics. Structured and unstructured data. Chatbots',
        link: ''
      },
      {
        title: 'Computer Vision',
        text: 'Visual classification of object nature, image recognition, and real-time video processing',
        link: ''
      },
      {
        title: 'Data Mining and Analytics',
        text: 'Advanced data analytics, clustering, pattern detection, statistical analysis, and data visualization',
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
      {
        title: 'Data Mining and Analytics',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
    this.servicesData = [
      {
        title: 'Extand your team',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Build your idea',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      },
      {
        title: 'Management',
        text: 'Help build a team or pick a ready-made team',
        link: ''
      }
    ];
    this.linkedData = [
      {
        title: 'Software Product Development'
      },
      {
        title: 'Web services development'
      },
      {
        title: 'R&D and innovation'
      },
      {
        title: 'Technical Support'
      },
      {
        title: 'Mobile Application Development'
      },
      {
        title: 'Extended Reality (AR / VR)'
      },
      {
        title: 'Software QA & Testing'
      }
    ];
    this.newsService.load().subscribe(data => {
      this.news = data;
    });
  }
}
