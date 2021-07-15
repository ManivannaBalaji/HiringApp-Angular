import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddJobPostComponent } from 'src/app/job/add-job-post/add-job-post.component';
import { JobsMenuComponent } from 'src/app/job/jobs-menu/jobs-menu.component';
import { DisplayJobsComponent } from 'src/app/job/display-jobs/display-jobs.component';
import { RouterModule } from '@angular/router';
import { ViewJobDetailsComponent } from 'src/app/job/view-job-details/view-job-details.component';
import { UpdateJobPostComponent } from 'src/app/job/update-job-post/update-job-post.component';


@NgModule({
  declarations: [
    JobsMenuComponent,
    DisplayJobsComponent,    
    AddJobPostComponent,
    ViewJobDetailsComponent,
    UpdateJobPostComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class JobModule { }
