import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {findQuestion, updateValidation} from '../../utils/utils';
import {HttpCommunicationService} from '../../core';
import {AdminService} from './admin.service';
import * as moment from 'moment';

@Injectable()
export class ClassService {

  constructor(private http: HttpCommunicationService, private admin: AdminService) {

  }

  getClassQuestion() {
    return [
      {
        class: 'row',
        questions: [
          {
            value: [],
            key: 'trainers',
            label: 'reg-trainers',
            class: 'form-group',
            containerClass: ['col-sm-12'],
            inputClass: 'auto-complete-input',
            required: true,
            controlType: 'auto_complete',
            field: 'name',
            filter: (query, question) => {
              this.admin.autoComplete(query.query)
                .map((data) => {
                  data.map(user => {
                    user['name'] = user['first_name'] + ' ' + user['last_name'];
                  })
                  return data;
                })
                .subscribe(data => {
                  question.filtered = data;
                });
            }
          }
        ],
        controlType: 'container'
      },
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'course_id',
            label: 'class-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-6'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: this.getCourseOptions(this.admin.courses)
          }
        ],
        controlType: 'container'
      },
      {
        key: 'dates',
        class: 'row',
        questions: [
          {
            value: '',
            key: 'start_date',
            label: 'start-date',
            class: 'form-group',
            containerClass: ['col-sm-6'],
            inputClass: 'form-control',
            styleClass: 'width-100',
            order: 1,
            controlType: 'date_picker',
          },
          {
            value: '',
            key: 'end_date',
            label: 'end-date',
            class: 'form-group',
            containerClass: ['col-sm-6'],
            styleClass: 'width-100',
            inputClass: 'form-control',
            order: 1,
            controlType: 'date_picker',
          }
        ],
        controlType: 'container'
      },
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'price',
            label: 'class-price',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-6'],
            required: true,
            order: 1,
            controlType: 'textbox',
            type: 'number',
            minValue: 0
          },
          {
            value: false,
            key: 'date_exact',
            label: 'is-known-date',
            inputClass: '',
            class: 'form-group checkbox-container',
            containerClass: ['col-sm-6'],
            required: true,
            controlType: 'checkbox',
            change: (data, form, question, questions) => {
              updateValidation(form, 'start_date', questions, 'dates.start_date', (q) => {
                q.required = data;
                return q;
              });

              updateValidation(form, 'end_date', questions, 'dates.end_date', (q) => {
                q.required = data;
                return q;
              });
            }
          }
        ],
        controlType: 'container'
      }
    ];
  }

  public createClass(data) {
    data['start_date'] = moment(data['start_date']).format('YYYY-MM-DD');
    data['end_date'] = moment(data['end_date']).format('YYYY-MM-DD');
    return this.http.post(ApiConstants.CREATE_CLASS, data, null, false);
  }

  public getClass(id) {
    return this.http.get(ApiConstants.GET_CLASS + `/${id}`);
  }

  public getCourseOptions(courses) {
    return courses.map(course => {
      return {label: course.name, value: course.id};
    })
  }
}

