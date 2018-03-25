import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from '../../core';

@Injectable()
export class AdminService {

  constructor(private http: HttpCommunicationService) {

  }

  public words() {
    return this.http.get(ApiConstants.WORDS);
  }

}

