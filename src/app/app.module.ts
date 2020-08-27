import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { UsrModule } from './components/usr/usr.module';
import { SharedModule} from './components/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    UsrModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: '', loadChildren: './components/usr/usr.module#UsrModule' },
], {
    initialNavigation: 'enabled'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
