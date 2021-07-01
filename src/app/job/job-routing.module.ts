import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsMenuComponent } from 'src/app/recruiter/jobs-menu/jobs-menu.component';
import { DisplayJobsComponent } from 'src/app/recruiter/display-jobs/display-jobs.component';
import { AddJobPostComponent } from 'src/app/recruiter/add-job-post/add-job-post.component';
import { ViewJobDetailsComponent } from 'src/app/recruiter/view-job-details/view-job-details.component';
import { UpdateJobPostComponent } from 'src/app/recruiter/update-job-post/update-job-post.component';

const routes: Routes = [
  {path: 'recruiter/openings', component: JobsMenuComponent},
  {path: 'recruiter/jobs', component: DisplayJobsComponent},
 // {path: 'recruiter/jobs/add', component: AddJobPostComponent},
  {path: 'recruiter/jobs/:id', component: ViewJobDetailsComponent},
  {path: 'recruiter/jobs/:id/update', component: UpdateJobPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
