import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { UsrModule } from './components/usr/usr.module';
import { SharedModule} from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsrModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', loadChildren: './components/usr/usr.module#UsrModule'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
