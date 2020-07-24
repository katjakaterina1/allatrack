import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-service-single',
  templateUrl: './usr-service-single.component.html',
  styleUrls: ['./usr-service-single.component.sass']
})
export class UsrServiceSingleComponent implements OnInit {
  public threeData: any[];
  public linkData: any[];
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
      }
    ];
    this.linkData = [
      {
        title: 'Blockchain (DLT)'
      },
      {
        title: 'Cognitive Computing (AI / ML)'
      },
      {
        title: 'Internet of Things (IoT)'
      },
      {
        title: 'Extended Reality (AR / VR)'
      },
      {
        title: 'Data, BI and Analytics'
      },
      {
        title: 'Customer Experience (UX / UI)'
      },
      {
        title: 'Cloud & DevOps'
      },
    ];
  }
}
