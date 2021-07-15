import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllApplicantsComponent } from 'src/app/applicant/all-applicants/all-applicants.component';
import { ApplicantDetailsComponent } from 'src/app/applicant/applicant-details/applicant-details.component';
import { RecruiterGuard } from 'src/app/guards/recruiter.guard';

const routes: Routes = [
  {path: 'recruiter/applications', component: AllApplicantsComponent, canActivate: [RecruiterGuard]},
  {path: 'recruiter/applications/:id', component: ApplicantDetailsComponent, canActivate: [RecruiterGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
