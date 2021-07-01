import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component'; 
import { RecruiterLoginComponent } from 'src/app/recruiter/recruiter-login/recruiter-login.component';
import { DashboardComponent } from 'src/app/recruiter/dashboard/dashboard.component';
import { AllApplicantsComponent } from 'src/app/recruiter/all-applicants/all-applicants.component';
import { ApplicantDetailsComponent } from 'src/app/recruiter/applicant-details/applicant-details.component';
import { SelectedListComponent } from 'src/app/recruiter/selected-list/selected-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recruiter/login', component: RecruiterLoginComponent},
  {path: 'recruiter/dashboard', component: DashboardComponent},
  {path: 'recruiter/applications', component: AllApplicantsComponent},
  {path: 'recruiter/applications/:id', component: ApplicantDetailsComponent},
  {path: 'recruiter/selectedlist', component: SelectedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
