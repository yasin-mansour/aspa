import {Injectable} from '@angular/core';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from '../../core';
import {AdminService} from './admin.service';
import {findQuestion, updateValidation} from "../../utils/utils";
import * as _ from 'lodash';

@Injectable()
export class FormStoreService {

  constructor(private http: HttpCommunicationService,
              private admin: AdminService) {
  }

  get newCourse() {
    return [
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'name',
            label: 'class-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-12'],
            required: true,
            order: 1,
            controlType: 'textbox',
            unique: this.admin.getCourses.bind(this.admin),
          }
        ],
        controlType: 'container'
      },
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'name',
            label: 'class-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-6'],
            required: true,
            order: 1,
            controlType: 'textbox',
          },
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
        class: 'row',
        questions: [
          {
            value: '',
            key: 'description',
            label: 'class-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-12'],
            order: 1,
            controlType: 'textbox'
          }
        ],
        controlType: 'container'
      }
    ];
  }

  get newMaterial() {
    return [
      {
        class: 'row',
        questions: [
          {
            value: 'public',
            key: 'privilege',
            label: 'privilege',
            class: 'form-group',
            containerClass: ['col-sm-12'],
            required: true,
            order: 1,
            controlType: 'radio',
            options: [{label: 'public', value: 'public'},
              {label: 'semi-protected', value: 'semi-protected'},
              {label: 'protected', value: 'protected'},
              {label: 'private', value: 'private'}],
            change: (data, form, question, questions) => {
              updateValidation(form, 'course_id', questions, 'course_class.course_id', (q) => {
                q.required = data === 'protected' || data === 'private';
                if (!q.required) {
                  form.controls['course_id'].disable();
                } else {
                  form.controls['course_id'].enable();
                }

                return q;
              });

              updateValidation(form, 'class_id', questions, 'course_class.class_id', (q) => {
                q.required = data === 'private';
                q.disabled = !q.required;
                if (!q.required) {
                  form.controls['class_id'].disable();
                } else {
                  form.controls['class_id'].enable();
                }
                return q;
              });
            }
          }
        ],
        controlType: 'container'
      },
      {
        class: 'row',
        key: 'course_class',
        questions: [
          {
            value: '',
            key: 'course_id',
            label: 'course',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-6'],
            order: 1,
            controlType: 'dropdown',
            disabled: true,
            options: this.getCourseOptions(this.admin.courses),
            change: (data, form, question, questions) => {
              if (data) {
                const classQuestion = findQuestion(questions, 'course_class.class_id');
                const course = _.find(this.admin.courses, {id: +data});
                classQuestion.options = this.getCourseOptions(course['classrooms'] || []);
              }
            }
          },
          {
            value: '',
            key: 'class_id',
            label: 'class',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-sm-6'],
            order: 1,
            controlType: 'dropdown',
            disabled: true,
            options: []
          }
        ],
        controlType: 'container'
      },
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'files',
            label: 'files',
            class: 'form-group',
            containerClass: ['col-sm-12'],
            order: 1,
            controlType: 'file',
            required: true
          }
        ],
        controlType: 'container'
      }
    ];
  }

  public getCourseOptions(courses) {
    return courses.map(course => {
      return {label: course.name, value: course.id};
    });
  }
}

