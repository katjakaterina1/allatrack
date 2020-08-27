import { Component, OnInit } from '@angular/core';
import {VacanciesService} from '../../../services/vacancies.service';

@Component({
  selector: 'app-usr-careers',
  templateUrl: './usr-careers.component.html',
  styleUrls: ['./usr-careers.component.sass']
})
export class UsrCareersComponent implements OnInit {

  constructor(public vacanciesService: VacanciesService) { }
  data: any;
  ngOnInit(): void {
    this.getCareers();
  }
  getCareers(): any {
    this.vacanciesService.load().subscribe(data => {
      this.data = data;
    });
  }

}
