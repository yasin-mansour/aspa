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
  AuthGuard,
  LocalizationService,
  AdminGuard,
  ClientGuard,
  RegisterGuard,
  ClassService,
  UploadService,
  ResourceService,
  ErrorHandlerService,
  LogoutService
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
    AdminGuard,
    ClientGuard,
    RegisterGuard,
    ElementMapService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    RoutingRegisterService,
    LocalizationService,
    ClassService,
    UploadService,
    ResourceService,
    ErrorHandlerService,
    LogoutService
  ],
  bootstrap: []
})
export class CoreModule {
}
