import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { UserModule } from './components/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        UserModule,
        RouterModule.forRoot([
          { path: '', loadChildren: './components/user/user.module#UserModule'},
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
