import {HttpCommunicationService} from './services/http-communication.service';
import {QuestionControlService} from './services/question-control.service';
import {BuildQuestions} from './services/question.service';
import {ElementMapService} from './services/element-map.service';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {RoutingRegisterService} from './services/routing-register.service';
import {AppGuard} from './guards/app-guard';
import {AdminGuard} from './guards/admin-guard';
import {ClientGuard} from './guards/client-guard';
import {RegisterGuard} from './guards/register-guard';
import {AuthGuard} from './guards/auth-guard';
import {LocalizationService} from './services/localization.service';
import {ClassService} from './services/class.service';
import {UploadService} from './services/upload.service';
import {ResourceService} from './services/resource.service';

export {
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
  ResourceService
};
