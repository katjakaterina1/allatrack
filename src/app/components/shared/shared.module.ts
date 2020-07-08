import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent} from './cases/cases.component';
import { FooterComponent} from './footer/footer.component';
import { HeaderComponent} from './header/header.component';
import { OurServicesComponent} from './our-services/our-services.component';


@NgModule({
  declarations: [
    CasesComponent,
    FooterComponent,
    HeaderComponent,
    OurServicesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CasesComponent,
    FooterComponent,
    HeaderComponent,
    OurServicesComponent
  ]
})
export class SharedModule { }
