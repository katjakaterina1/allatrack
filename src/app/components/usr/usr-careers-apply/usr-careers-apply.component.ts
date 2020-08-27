import { Component, OnInit } from '@angular/core';
import {VacanciesService} from '../../../services/vacancies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usr-careers-apply',
  templateUrl: './usr-careers-apply.component.html',
  styleUrls: ['./usr-careers-apply.component.sass']
})
export class UsrCareersApplyComponent implements OnInit {
  alias: any;
  data: any;
  careerAlias: any;
  constructor(public vacanciesService: VacanciesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.careerAlias = this.route.params.subscribe(params => {
      this.alias = params['alias'];
      this.vacanciesService.get(this.alias).subscribe(data => {
        window.scroll(0, 0);
        this.data = data;
      });
    });
  }

}
