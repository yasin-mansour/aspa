import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {findQuestion, updateValidation} from '../../utils/utils';
import {HttpCommunicationService} from '../../core';
import {AdminService} from './admin.service';

@Injectable()
export class CourseService {

  constructor(private http: HttpCommunicationService, private admin: AdminService) {

  }

  getCourseQuestion() {
    return [
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'first_name',
            label: 'reg-first-name',
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
            key: 'course-name',
            label: 'course-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-12'],
            required: true,
            order: 1,
            controlType: 'textbox',
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
            key: 'start-date',
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
            key: 'end-date',
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
            label: 'course-price',
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
            value: 0,
            key: 'type',
            label: 'is-known-date',
            inputClass: '',
            class: 'form-group checkbox-container',
            containerClass: ['col-sm-6'],
            required: true,
            controlType: 'checkbox',
            change: (data, form, question, questions) => {
              updateValidation(form, 'start-date', questions, 'dates.start-date', (q) => {
                q.required = data;
                return q;
              });

              updateValidation(form, 'end-date', questions, 'dates.end-date', (q) => {
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
}

