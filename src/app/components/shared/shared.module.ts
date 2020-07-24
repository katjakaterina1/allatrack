import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent} from './cases/cases.component';
import { FooterComponent} from './footer/footer.component';
import { HeaderComponent} from './header/header.component';
import { OurServicesComponent} from './our-services/our-services.component';
import {RouterModule} from '@angular/router';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { ThreeColumnedBlockComponent } from './three-columned-block/three-columned-block.component';
import { StagesSliderComponent } from './stages-slider/stages-slider.component';
import { TabsBlockComponent } from './tabs-block/tabs-block.component';
import { FormComponent } from './form/form.component';
import { SmallContactComponent } from './small-contact/small-contact.component';
import { FaqBlockComponent } from './faq-block/faq-block.component';

@NgModule({
  declarations: [
    CasesComponent,
    FooterComponent,
    HeaderComponent,
    OurServicesComponent,
    BlogSectionComponent,
    ThreeColumnedBlockComponent,
    StagesSliderComponent,
    TabsBlockComponent,
    FormComponent,
    SmallContactComponent,
    FaqBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CasesComponent,
    FooterComponent,
    HeaderComponent,
    OurServicesComponent,
    BlogSectionComponent,
    ThreeColumnedBlockComponent,
    StagesSliderComponent,
    TabsBlockComponent,
    FormComponent,
    SmallContactComponent,
    FaqBlockComponent
  ]
})
export class SharedModule { }
