import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpCommunicationService
} from './';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [HttpCommunicationService],
  bootstrap: []
})
export class CoreModule { }
