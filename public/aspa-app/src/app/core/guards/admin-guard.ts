import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot} from '@angular/router';
import {HttpCommunicationService} from '../services/http-communication.service';
import {Router} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private http: HttpCommunicationService, private router: Router) {
  }

  canActivate(_, state: RouterStateSnapshot) {

    if (this.http.user && this.http.user.role_type === 'admin') {
      return true;
    }
    return false;

  }
}
