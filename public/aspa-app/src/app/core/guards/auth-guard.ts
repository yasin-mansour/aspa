import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {HttpCommunicationService} from '../services/http-communication.service'
@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private http: HttpCommunicationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !route.data.userRole || (this.http.user && route.data.userRole ===  this.http.user.role);
  }
}
