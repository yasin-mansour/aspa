import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {HttpCommunicationService} from '../services/http-communication.service'
@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private http: HttpCommunicationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true; // !route.data.userRole || (this.http.clientData && route.data.userRole ===  this.http.clientData.role);
  }
}
