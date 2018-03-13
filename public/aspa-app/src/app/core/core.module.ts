import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpCommunicationService,
  AppGuard
} from './';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
  ],
  providers: [HttpCommunicationService, AppGuard],
  bootstrap: []
})
export class CoreModule { }
