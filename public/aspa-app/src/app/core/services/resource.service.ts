import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {findQuestion, updateValidation} from '../../utils/utils';
import {HttpCommunicationService} from '../../core/services/http-communication.service';
import * as moment from 'moment';

@Injectable()
export class ResourceService {
  private _courses = [];
  private _categories = [];

  constructor(private http: HttpCommunicationService) {

  }

  public getResource() {
    return this.http.get(ApiConstants.APP_RESOURCE).toPromise().then((data: Array<any>) => {
      this._categories = data || [];
    });
  }

  get courses() {
    return this._courses || [];
  }

  get categories() {
    return this._categories || [];
  }
}

