import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from '../../core';
import {updateArray} from "../../utils/utils";

@Injectable()
export class AdminService {

  _courses = [];
  _categories = [];

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

  public addCategory(val) {
    return this.http.post(ApiConstants.CREATE_CATEGORY, val, null, false);
  }

  public resource() {
    this.http.get(ApiConstants.CREATE_RESOURCE).toPromise().then(data => {
      this._courses = updateArray(this._courses, data['courses'] || []);
      this._categories = updateArray(this._categories, data['categories'] || []);
      console.log(data);
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

  get categories() {
    console.log(this._categories );
    return this._categories || [];
  }

  public getCourses() {
    return this.courses;
  }

  public getCategory() {
    return this.categories;
  }
}

