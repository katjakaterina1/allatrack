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
import { UsrCaseSingleComponent } from './cases/usr-case-single/usr-case-single.component';
import { UsrInfoComponent } from './usr-info/usr-info.component';
import { UsrAboutComponent } from './usr-about/usr-about.component';
import { UsrProcessComponent } from './usr-process/usr-process.component';
import { UsrProductsComponent } from './usr-products/usr-products.component';
import { UsrOverviewComponent } from './usr-overview/usr-overview.component';
import { UsrContactUsComponent } from './usr-contact-us/usr-contact-us.component';
import { UsrCareersApplyComponent } from './usr-careers-apply/usr-careers-apply.component';
import { UsrCareersComponent } from './usr-careers/usr-careers.component';
import { UsrCareersSingleComponent } from './usr-careers-single/usr-careers-single.component';
import { UsrBlogListComponent } from './usr-blog-list/usr-blog-list.component';
import { UsrCaseEpicenterComponent } from './cases/usr-case-epicenter/usr-case-epicenter.component';
import { UsrCaseGtruckComponent } from './cases/usr-case-gtruck/usr-case-gtruck.component';
import { UsrArgentinaGrillComponent } from './cases/usr-argentina-grill/usr-argentina-grill.component';
import { UsrCasesDarmenComponent } from './cases/usr-cases-darmen/usr-cases-darmen.component';
import { UsrCaseFaComponent } from './cases/usr-case-fa/usr-case-fa.component';
import { UsrCaseAnalysisComponent } from './cases/usr-case-analysis/usr-case-analysis.component';
import { UsrCaseAntiPlagiatComponent } from './cases/usr-case-anti-plagiat/usr-case-anti-plagiat.component';
import { UsrCaseAntifrodComponent } from './cases/usr-case-antifrod/usr-case-antifrod.component';
import { UsrCaseAnimalsComponent } from './cases/usr-case-animals/usr-case-animals.component';
import { UsrCaseCrmOptimizationComponent } from './cases/usr-case-crm-optimization/usr-case-crm-optimization.component';
import { UsrCaseVrBuilderComponent } from './cases/usr-case-vr-builder/usr-case-vr-builder.component';
import { UsrCaseEskulabsComponent } from './cases/usr-case-eskulabs/usr-case-eskulabs.component';
import { UsrCaseTickbusComponent } from './cases/usr-case-tickbus/usr-case-tickbus.component';
import { UsrCaseLotaryComponent } from './cases/usr-case-lotary/usr-case-lotary.component';
import { UsrCaseTrackAndTraceComponent } from './cases/usr-case-track-and-trace/usr-case-track-and-trace.component';

const userRoutes: Routes = [
  { path: '', component: UsrIndexComponent },
  { path: 'expertises', component: UsrExpertisesListComponent },
  { path: 'expertise-single', component: UsrExpertiseSingleComponent },
  { path: 'services-list', component: UsrServicesListComponent },
  { path: 'service-single', component: UsrServiceSingleComponent },
  { path: 'cases', component: UsrCasesComponent },
  { path: 'cases/tickfind', component: UsrCaseSingleComponent },
  { path: 'cases/tickbus', component: UsrCaseTickbusComponent },
  { path: 'cases/lotary', component: UsrCaseLotaryComponent },
  { path: 'cases/track-and-trace', component: UsrCaseTrackAndTraceComponent },
  { path: 'cases/epicenter', component: UsrCaseEpicenterComponent },
  { path: 'cases/g-truck', component: UsrCaseGtruckComponent },
  { path: 'cases/darmen', component: UsrCasesDarmenComponent },
  { path: 'cases/argentina-grill', component: UsrArgentinaGrillComponent },
  { path: 'cases/fa', component: UsrCaseFaComponent },
  { path: 'cases/analysis', component: UsrCaseAnalysisComponent},
  { path: 'cases/anti-plagiat', component: UsrCaseAntiPlagiatComponent},
  { path: 'cases/antifrod', component: UsrCaseAntifrodComponent},
  { path: 'cases/animals', component: UsrCaseAnimalsComponent},
  { path: 'cases/crm-optimization', component: UsrCaseCrmOptimizationComponent},
  { path: 'cases/vr-builder', component: UsrCaseVrBuilderComponent},
  { path: 'cases/eskulabs', component: UsrCaseEskulabsComponent},
  { path: 'blog-single/:alias', component: UsrBlogSingleComponent },
  { path: 'info', component: UsrInfoComponent },
  { path: 'about', component: UsrAboutComponent },
  { path: 'process', component: UsrProcessComponent },
  { path: 'products', component: UsrProductsComponent },
  { path: 'overview', component: UsrOverviewComponent },
  { path: 'contacts', component: UsrContactUsComponent },
  { path: 'careers', component: UsrCareersComponent },
  { path: 'careers-single/:alias', component: UsrCareersSingleComponent },
  { path: 'careers-apply/:alias', component: UsrCareersApplyComponent },
  { path: 'blog', component: UsrBlogListComponent },
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
    UsrCareersComponent,
    UsrCareersSingleComponent,
    UsrBlogListComponent,
    UsrCaseEpicenterComponent,
    UsrCaseGtruckComponent,
    UsrArgentinaGrillComponent,
    UsrCasesDarmenComponent,
    UsrCaseFaComponent,
    UsrCaseAnalysisComponent,
    UsrCaseAntiPlagiatComponent,
    UsrCaseAntifrodComponent,
    UsrCaseAnimalsComponent,
    UsrCaseCrmOptimizationComponent,
    UsrCaseVrBuilderComponent,
    UsrCaseEskulabsComponent,
    UsrCaseTickbusComponent,
    UsrCaseLotaryComponent,
    UsrCaseTrackAndTraceComponent
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
