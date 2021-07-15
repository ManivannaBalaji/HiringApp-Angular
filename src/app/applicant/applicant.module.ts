import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { AllApplicantsComponent } from 'src/app/applicant/all-applicants/all-applicants.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ApplicantDetailsComponent } from 'src/app/applicant/applicant-details/applicant-details.component';


@NgModule({
  declarations: [
    AllApplicantsComponent,
    ApplicantDetailsComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ApplicantModule { }
