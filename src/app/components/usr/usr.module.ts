import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsrIndexComponent} from './usr-index/usr-index.component';
import {RouterModule, Routes} from '@angular/router';
import { UsrExpertisesListComponent } from './usr-expertises-list/usr-expertises-list.component';
import {SharedModule} from '../shared/shared.module';

const userRoutes: Routes = [
  { path: '', component: UsrIndexComponent },
  { path: 'expertises', component: UsrExpertisesListComponent },
];

@NgModule({
  declarations: [UsrExpertisesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      userRoutes
    ),
    SharedModule,
  ]
})
export class UsrModule { }
