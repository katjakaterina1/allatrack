import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-about',
  templateUrl: './usr-about.component.html',
  styleUrls: ['./usr-about.component.sass']
})
export class UsrAboutComponent implements OnInit {
  public threeData: any[];
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
        text: 'Advanced texts, speech, and cognitive analytics. Structured and unstructured data. Chatbots',
        link: ''
      },
      {
        title: 'Data Mining and Analytics',
        text: 'Advanced texts, speech, and cognitive analytics. Structured and unstructured data. Chatbots',
        link: ''
      },
      {
        title: 'Extended Reality (AR / VR)',
        text: 'Advanced texts, speech, and cognitive analytics. Structured and unstructured data. Chatbots',
        link: ''
      },
      {
        title: 'Natural Language Processing',
        text: 'Advanced texts, speech, and cognitive analytics. Structured and unstructured data. Chatbots',
        link: ''
      },
      {
        title: 'Computer Vision',
        text: 'Advanced texts, speech, and cognitive analytics. Structured and unstructured data. Chatbots',
        link: ''
      },
    ];
  }

}
