import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import { AngularSplitModule } from 'angular-split';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  AdminContainerComponent,
  DashboardComponent,
  LocalizationComponent,
  TasksComponent,
  AdminService,
  DashboardMenuComponent,
  DashboardHeaderComponent,
  HomePageComponent,
  CourseService
} from './';

@NgModule({
  declarations: [
    AdminContainerComponent,
    DashboardComponent,
    LocalizationComponent,
    TasksComponent,
    DashboardMenuComponent,
    DashboardHeaderComponent,
    HomePageComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers: [
    AdminService,
    CourseService
  ],
  bootstrap: [],
  exports: [
    AdminContainerComponent
  ]
})
export class AdminModule { }
