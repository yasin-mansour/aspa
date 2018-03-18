import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from './http-communication.service';
import {RoutingRegisterService} from './routing-register.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpCommunicationService,
              private register: RoutingRegisterService) {

  }

  public getToken() {
    return this.http.get(ApiConstants.TOKEN_PATH).toPromise().then(data => {
      this.http.setUser(data);
      this.register.updateRouter();
    });
  }

}

