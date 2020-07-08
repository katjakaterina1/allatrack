import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsrIndexComponent} from './usr-index/usr-index.component';
import {RouterModule, Routes} from '@angular/router';
import { UsrExpertisesListComponent } from './usr-expertises-list/usr-expertises-list.component';
import {SharedModule} from '../shared/shared.module';
import { UsrExpertiseSingleComponent } from './usr-expertise-single/usr-expertise-single.component';

const userRoutes: Routes = [
  { path: '', component: UsrIndexComponent },
  { path: 'expertises', component: UsrExpertisesListComponent },
  { path: 'expertise-single', component: UsrExpertiseSingleComponent },
];

@NgModule({
  declarations: [
    UsrIndexComponent,
    UsrExpertisesListComponent,
    UsrExpertiseSingleComponent,
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
