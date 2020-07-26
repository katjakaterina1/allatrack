import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsrIndexComponent} from './usr-index/usr-index.component';
import {RouterModule, Routes} from '@angular/router';
import { UsrExpertisesListComponent } from './usr-expertises-list/usr-expertises-list.component';
import {SharedModule} from '../shared/shared.module';
import { UsrExpertiseSingleComponent } from './usr-expertise-single/usr-expertise-single.component';
import { UsrServicesListComponent } from './usr-services-list/usr-services-list.component';
import { UsrServiceSingleComponent } from './usr-service-single/usr-service-single.component';
import { UsrBlogSingleComponent } from './usr-blog-single/usr-blog-single.component';
import { UsrCasesComponent } from './usr-cases/usr-cases.component';

const userRoutes: Routes = [
  { path: '', component: UsrIndexComponent },
  { path: 'expertises', component: UsrExpertisesListComponent },
  { path: 'expertise-single', component: UsrExpertiseSingleComponent },
  { path: 'services-list', component: UsrServicesListComponent },
  { path: 'service-single', component: UsrServiceSingleComponent },
  { path: 'cases', component: UsrCasesComponent },
  { path: 'blog-single', component: UsrBlogSingleComponent },
];

@NgModule({
  declarations: [
    UsrIndexComponent,
    UsrExpertisesListComponent,
    UsrExpertiseSingleComponent,
    UsrServicesListComponent,
    UsrServiceSingleComponent,
    UsrBlogSingleComponent,
    UsrCasesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      userRoutes
    ),
    SharedModule,
  ]
})
export class UsrModule { }
