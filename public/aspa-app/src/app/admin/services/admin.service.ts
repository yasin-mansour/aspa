import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from '../../core';

@Injectable()
export class AdminService {

  _courses = [];

  constructor(private http: HttpCommunicationService) {

  }

  public words() {
    return this.http.get(ApiConstants.WORDS);
  }

  public generateLocalization() {
    return this.http.post(ApiConstants.GENERATE_LOCALIZATION, {}, null, false);
  }

  public autoComplete(query) {
    return this.http.post(ApiConstants.AUTO_COMPLETE, {free_text: query}, null, false);
  }

  public addCourse(val) {
    return this.http.post(ApiConstants.CREATE_COURSE, val, null, false);
  }

  public resource() {
    this.http.get(ApiConstants.CREATE_RESOURCE).toPromise().then(data => {
      this._courses = data['courses'] || [];
    });
  }

  set course(val) {
    if (this._courses) {
      this._courses.push(val);
    }
  }

  get courses() {
    return this._courses || [];
  }

  public getCourses() {
    return this.courses;
  }
}

