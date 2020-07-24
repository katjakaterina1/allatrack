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
import { FaqBlockComponent } from './faq-block/faq-block.component';
import { NumbersBlockComponent } from './numbers-block/numbers-block.component';
import { TrianglesBlockComponent } from './triangles-block/triangles-block.component';
import { CaseResultComponent } from './case-result/case-result.component';


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
    FaqBlockComponent,
    NumbersBlockComponent,
    TrianglesBlockComponent,
    CaseResultComponent
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
    FaqBlockComponent,
    NumbersBlockComponent,
    TrianglesBlockComponent,
    CaseResultComponent
  ]
})
export class SharedModule { }
