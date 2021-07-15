import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component'; 
import { RecruiterLoginComponent } from 'src/app/recruiter/recruiter-login/recruiter-login.component';
import { DashboardComponent } from 'src/app/recruiter/dashboard/dashboard.component';
import { SelectedListComponent } from 'src/app/recruiter/selected-list/selected-list.component';
import { RecruiterGuard } from 'src/app/guards/recruiter.guard';
import { FeedbackComponent } from 'src/app/recruiter/feedback/feedback.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recruiter/login', component: RecruiterLoginComponent},
  {path: 'recruiter/dashboard', component: DashboardComponent, canActivate: [RecruiterGuard]},
  {path: 'recruiter/selectedlist', component: SelectedListComponent, canActivate: [RecruiterGuard]},
  {path: 'recruiter/feedback', component: FeedbackComponent, canActivate: [RecruiterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
