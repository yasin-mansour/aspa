import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  HttpCommunicationService,
  QuestionControlService,
  BuildQuestions,
  AuthService,
  AppGuard,
  ElementMapService
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
    AppGuard,
    ElementMapService
  ],
  bootstrap: []
})
export class CoreModule {
}
