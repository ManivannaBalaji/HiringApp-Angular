import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RecruiterLoginComponent } from './recruiter/recruiter-login/recruiter-login.component';
import { DashboardComponent } from './recruiter/dashboard/dashboard.component';
import { SidenavComponent } from './recruiter/sidenav/sidenav.component';
import { AllApplicantsComponent } from './recruiter/all-applicants/all-applicants.component';
import { ApplicantDetailsComponent } from './recruiter/applicant-details/applicant-details.component';
import { SelectedListComponent } from './recruiter/selected-list/selected-list.component';
import { FilterSelectedListPipe } from './pipe/filter-selected-list.pipe';
import { JobModule } from 'src/app/job/job.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecruiterLoginComponent,
    DashboardComponent,    
    AllApplicantsComponent,
    ApplicantDetailsComponent,
    SelectedListComponent,
    FilterSelectedListPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
   // JobModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
