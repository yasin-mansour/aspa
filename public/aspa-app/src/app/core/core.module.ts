import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  HttpCommunicationService,
  QuestionControlService,
  BuildQuestions,
  AuthService,
  AppGuard,
  ElementMapService,
  AuthInterceptor,
  RoutingRegisterService,
  AuthGuard
} from './';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    HttpCommunicationService,
    QuestionControlService,
    BuildQuestions,
    AuthService,
    AppGuard,
    AuthGuard,
    ElementMapService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    RoutingRegisterService
  ],
  bootstrap: []
})
export class CoreModule {
}
