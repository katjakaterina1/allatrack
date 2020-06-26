import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { UsrModule } from './components/usr/usr.module';
import { UsrIndexComponent } from './components/usr/usr-index/usr-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsrIndexComponent
  ],
    imports: [
        BrowserModule,
        UsrModule,
        RouterModule.forRoot([
          { path: '', loadChildren: './components/usr/usr.module#UsrModule'},
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
