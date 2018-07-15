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
  ClassService,
  ClassesComponent,
  ClassComponent
} from './';

@NgModule({
  declarations: [
    AdminContainerComponent,
    DashboardComponent,
    LocalizationComponent,
    TasksComponent,
    DashboardMenuComponent,
    DashboardHeaderComponent,
    HomePageComponent,
    ClassesComponent,
    ClassComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers: [
    AdminService,
    ClassService
  ],
  bootstrap: [],
  exports: [
    AdminContainerComponent
  ]
})
export class AdminModule { }
