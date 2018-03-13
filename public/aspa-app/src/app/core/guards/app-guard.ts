/**
 * Created by exalt on 8/7/2017.
 */

import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {HttpCommunicationService} from '../services/http-communication.service';

@Injectable()
export class AppGuard implements CanActivate {
  constructor( private httpCommunicationService: HttpCommunicationService) {
  }

  canActivate() {
      return false //this.httpCommunicationService.getToken();
  }
}
