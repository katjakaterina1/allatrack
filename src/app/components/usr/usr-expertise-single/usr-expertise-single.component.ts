import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-expertise-single',
  templateUrl: './usr-expertise-single.component.html',
  styleUrls: ['./usr-expertise-single.component.sass']
})
export class UsrExpertiseSingleComponent implements OnInit {
  public threeData: any[];
  public servicesData: any[];
  public linkedData: any[];
  constructor() { }

  ngOnInit(): void {
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
    ]
  }
}
