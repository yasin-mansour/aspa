import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from './http-communication.service';
import {AuthService} from './auth.service';

@Injectable()
export class LogoutService {

  constructor(private http: HttpCommunicationService,
              private auth: AuthService) {

  }

  public logout() {
    return this.http.get(ApiConstants.LOGOUT_USER).toPromise().then(data => {
      this.auth.getToken();
    });
  }

}

