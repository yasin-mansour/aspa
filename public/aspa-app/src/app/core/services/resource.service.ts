import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {findQuestion, updateValidation} from '../../utils/utils';
import {HttpCommunicationService} from '../../core/services/http-communication.service';
import * as moment from 'moment';

@Injectable()
export class ResourceService {
  private _courses = [];

  constructor(private http: HttpCommunicationService) {

  }

  public resource() {
    return this.http.get(ApiConstants.APP_RESOURCE).toPromise().then(data => {
      this._courses = data['courses'] || [];
    });
  }

  get courses() {
    return this._courses || [];
  }
}

