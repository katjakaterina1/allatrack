import { Component, OnInit } from '@angular/core';
import {VacanciesService} from '../../../services/vacancies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-usr-careers-single',
  templateUrl: './usr-careers-single.component.html',
  styleUrls: ['./usr-careers-single.component.sass']
})
export class UsrCareersSingleComponent implements OnInit {

  constructor(public vacanciesService: VacanciesService,
              private route: ActivatedRoute,
              private router: Router) { }
  data: any;
  alias: any;
  careerAlias: any;
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
