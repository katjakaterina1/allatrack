import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsrIndexComponent} from './usr-index/usr-index.component';
import {RouterModule, Routes} from '@angular/router';

const userRoutes: Routes = [
  { path: '', component: UsrIndexComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      userRoutes
    )
  ]
})
export class UsrModule { }
