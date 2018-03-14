import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  HttpCommunicationService,
  AuthService,
  AppGuard
} from './';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
  ],
  providers: [HttpCommunicationService, AppGuard, AuthService],
  bootstrap: []
})
export class CoreModule {
}
