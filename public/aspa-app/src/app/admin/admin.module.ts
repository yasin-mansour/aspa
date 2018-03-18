import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import {
  AdminContainerComponent,
  DashboardComponent,
  LocalizationComponent,
  TasksComponent
} from './';

@NgModule({
  declarations: [
    AdminContainerComponent,
    DashboardComponent,
    LocalizationComponent,
    TasksComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    AdminContainerComponent
  ]
})
export class AdminModule { }
