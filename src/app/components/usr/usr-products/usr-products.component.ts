import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-products',
  templateUrl: './usr-products.component.html',
  styleUrls: ['./usr-products.component.sass']
})
export class UsrProductsComponent implements OnInit {
  caseData: any;
  constructor() { }

  ngOnInit(): void {
    this.caseData = [
      {
        caseTitle: '2FA',
        shortTitle: '2FA',
        // caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/fa-bg.png',
        fullImage: false,
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        background: '#FCC546',
        circle: 'right: -900px; top: -380px;',
        darkMode: false,
        route: '/cases/fa',
        section: ['web', 'saas']},
      {
        caseTitle: 'Tickbus',
        // caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/tickbus.png',
        imageStyles: 'object-fit: contain; margin-top: 127px',
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        fullImage: true,
        product: true,
        background: '#E7F2F3',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/tickbus'},
      {
        caseTitle: 'Tickfind',
        // caseTags: ['iOs', 'Android', 'Design', 'AI'],
        caseImage: '/assets/images/case1.gif',
        text: 'Service to find the new impressions Tick - The place where all the tickets are collected. Multipurpose searching service for events of any format, favorite artists, new places, routes, etc.',
        fullImage: true,
        product: true,
        background: '#E7F2F3',
        circle: 'right: -1000px; top: -280px; opacity: 0.08;',
        darkMode: false,
        route: '/cases/tickfind'},
    ];
  }

}
