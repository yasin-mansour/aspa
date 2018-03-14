import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from './http-communication.service';

@Injectable()
export class AuthService {


  constructor(private http: HttpCommunicationService) {

  }

  public getToken() {
    return this.http.get(ApiConstants.TOKEN_PATH).toPromise().then(data => {
      this.http.setToken(data.token);
      return true;
    });
  }

}

