import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  HttpCommunicationService,
  QuestionControlService,
  BuildQuestions,
  AuthService,
  AppGuard
} from './';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
  ],
  providers: [
    HttpCommunicationService,
    QuestionControlService,
    BuildQuestions,
    AuthService,
    AppGuard
  ],
  bootstrap: []
})
export class CoreModule {
}
