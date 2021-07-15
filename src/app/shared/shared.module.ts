import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SidenavComponent } from 'src/app/shared/sidenav/sidenav.component';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
