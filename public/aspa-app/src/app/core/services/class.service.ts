import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {findQuestion, updateValidation} from '../../utils/utils';
import {HttpCommunicationService} from '../../core/services/http-communication.service';
import * as moment from 'moment';

@Injectable()
export class ClassService {

  constructor(private http: HttpCommunicationService) {

  }

  public getClasses(page = 1, all = false, free_text?) {
    return this.http.get(ApiConstants.GET_COURSES, {page, all, free_text});
  }
}

