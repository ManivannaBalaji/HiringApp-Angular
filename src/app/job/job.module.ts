import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobsMenuComponent } from 'src/app/recruiter/jobs-menu/jobs-menu.component';
import { DisplayJobsComponent } from 'src/app/recruiter/display-jobs/display-jobs.component';
import { AddJobPostComponent } from 'src/app/recruiter/add-job-post/add-job-post.component';
import { ViewJobDetailsComponent } from 'src/app/recruiter/view-job-details/view-job-details.component';
import { UpdateJobPostComponent } from 'src/app/recruiter/update-job-post/update-job-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    JobsMenuComponent,
    DisplayJobsComponent,
    //AddJobPostComponent,
    //ViewJobDetailsComponent,
   // UpdateJobPostComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
   // JobRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[

  ]
})
export class JobModule { }
