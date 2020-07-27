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
import { UsrCaseSingleComponent } from './usr-case-single/usr-case-single.component';
import { UsrInfoComponent } from './usr-info/usr-info.component';
import { UsrAboutComponent } from './usr-about/usr-about.component';
import { UsrProcessComponent } from './usr-process/usr-process.component';
import { UsrProductsComponent } from './usr-products/usr-products.component';
import { UsrOverviewComponent } from './usr-overview/usr-overview.component';
import { UsrContactUsComponent } from './usr-contact-us/usr-contact-us.component';
import { UsrCareersApplyComponent } from './usr-careers-apply/usr-careers-apply.component';

const userRoutes: Routes = [
  { path: '', component: UsrIndexComponent },
  { path: 'expertises', component: UsrExpertisesListComponent },
  { path: 'expertise-single', component: UsrExpertiseSingleComponent },
  { path: 'services-list', component: UsrServicesListComponent },
  { path: 'service-single', component: UsrServiceSingleComponent },
  { path: 'cases', component: UsrCasesComponent },
  { path: 'case-single', component: UsrCaseSingleComponent },
  { path: 'blog-single', component: UsrBlogSingleComponent },
  { path: 'info', component: UsrInfoComponent },
  { path: 'about', component: UsrAboutComponent },
  { path: 'process', component: UsrProcessComponent },
  { path: 'products', component: UsrProductsComponent },
  { path: 'overview', component: UsrOverviewComponent },
  { path: 'contacts', component: UsrContactUsComponent },
  { path: 'careers-apply', component: UsrCareersApplyComponent },
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
    UsrCaseSingleComponent,
    UsrInfoComponent,
    UsrAboutComponent,
    UsrProcessComponent,
    UsrProductsComponent,
    UsrOverviewComponent,
    UsrContactUsComponent,
    UsrCareersApplyComponent,
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
