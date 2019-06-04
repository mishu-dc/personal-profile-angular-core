import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';
import { AchievementSectionComponent } from './achievement-section/achievement-section.component';
import { CertificationSectionComponent } from './certification-section/certification-section.component';
import { PublicationSectionComponent } from './publication-section/publication-section.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    IntroSectionComponent,
    InfoSectionComponent,
    PortfolioSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillSectionComponent,
    FooterSectionComponent,
    ResumeSectionComponent,
    AchievementSectionComponent,
    CertificationSectionComponent,
    PublicationSectionComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
