import {HttpCommunicationService} from './services/http-communication.service';
import {QuestionControlService} from './services/question-control.service';
import {BuildQuestions} from './services/question.service';
import {ElementMapService} from './services/element-map.service';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {RoutingRegisterService} from './services/routing-register.service';
import {AppGuard} from './guards/app-guard';
import {AuthGuard} from './guards/auth-guard';
import {LocalizationService} from './services/localization.service';

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
  LocalizationService
};
