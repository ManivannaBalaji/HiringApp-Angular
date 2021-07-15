import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobPostComponent } from 'src/app/job/add-job-post/add-job-post.component';
import { JobsMenuComponent } from 'src/app/job/jobs-menu/jobs-menu.component';
import { DisplayJobsComponent } from 'src/app/job/display-jobs/display-jobs.component';
import { ViewJobDetailsComponent } from 'src/app/job/view-job-details/view-job-details.component';
import { UpdateJobPostComponent } from 'src/app/job/update-job-post/update-job-post.component';
import { RecruiterGuard } from 'src/app/guards/recruiter.guard';

const routes: Routes = [
  {path: 'recruiter/openings', component: JobsMenuComponent, canActivate: [RecruiterGuard]},
  {path: 'recruiter/jobs', component: DisplayJobsComponent, canActivate: [RecruiterGuard]},
  {path: 'recruiter/jobs/add', component: AddJobPostComponent, canActivate: [RecruiterGuard]},
  {path: 'recruiter/jobs/:id', component: ViewJobDetailsComponent, canActivate: [RecruiterGuard]},
  {path: 'recruiter/jobs/:id/update', component: UpdateJobPostComponent, canActivate: [RecruiterGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
