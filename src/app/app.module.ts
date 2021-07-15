import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RecruiterLoginComponent } from './recruiter/recruiter-login/recruiter-login.component';
import { DashboardComponent } from './recruiter/dashboard/dashboard.component';
import { SelectedListComponent } from './recruiter/selected-list/selected-list.component';
import { FilterSelectedListPipe } from './pipe/filter-selected-list.pipe';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobModule } from 'src/app/job/job.module';
import { ApplicantModule } from 'src/app/applicant/applicant.module';
import { TokenInterceptor } from 'src/app/auth/token.interceptor';
import { FeedbackComponent } from './recruiter/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecruiterLoginComponent,
    DashboardComponent,
    SelectedListComponent,
    FilterSelectedListPipe,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    JobModule,
    ApplicantModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule, 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
