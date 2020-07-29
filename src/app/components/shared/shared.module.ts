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
import { NumbersBlockComponent } from './numbers-block/numbers-block.component';
import { TrianglesBlockComponent } from './triangles-block/triangles-block.component';
import { CaseResultComponent } from './case-result/case-result.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FoundersComponent } from './founders/founders.component';
import { TeamBlockComponent } from './team-block/team-block.component';
import { ProcessBlockComponent } from './process-block/process-block.component';
import { HeadingComponent } from './heading/heading.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CareesBlockComponent } from './carees-block/carees-block.component';
import { PaginationComponent } from './pagination/pagination.component';
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
    FaqBlockComponent,
    NumbersBlockComponent,
    TrianglesBlockComponent,
    CaseResultComponent,
    ReviewsComponent,
    FoundersComponent,
    TeamBlockComponent,
    ProcessBlockComponent,
    HeadingComponent,
    AboutComponent,
    ExpertiseComponent,
    ContactsComponent,
    CareesBlockComponent,
    PaginationComponent,
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
    FaqBlockComponent,
    NumbersBlockComponent,
    TrianglesBlockComponent,
    CaseResultComponent,
    ReviewsComponent,
    FoundersComponent,
    TeamBlockComponent,
    ProcessBlockComponent,
    HeadingComponent,
    AboutComponent,
    ExpertiseComponent,
    ContactsComponent,
    CareesBlockComponent,
    PaginationComponent,
  ]
})
export class SharedModule { }
