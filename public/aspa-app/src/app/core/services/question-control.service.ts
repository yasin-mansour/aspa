import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {QuestionBase} from '../classes/question-base';
import {Constants} from '../../utils/constants';
import {maxValueValidator} from '../../shared/validation/max-value/max-value.directive';
import {minValueValidator} from '../../shared/validation/min-value/min-value.directive';

@Injectable()
export class QuestionControlService {
  constructor() {
  }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    this.formQuestion(questions, group);

    return new FormGroup(group);
  }

  formQuestion(questions, group) {
    questions.forEach(question => {
      if (!question.outForm && question.controlType !== Constants.DYNAMIC_FORMS_CONTAINER && question.controlType !== Constants.DYNAMIC_FORMS_HTML) {

        let validation = [];
        if (question.required) {
          validation.push(Validators.required);
        }

        if (question.pattern) {
          validation.push(Validators.pattern(question.pattern));
        }

        if (question.maxValue !== null) {
          validation.push(maxValueValidator(question.maxValue, question.maxValueMessage));
        }

        if (question.minValue !== null) {
          validation.push(minValueValidator(question.minValue, question.minValueMessage));
        }

        if (question.minLength !== null) {
          validation.push(Validators.minLength(question.minLength));
        }

        if (question.maxLength !== null) {
          validation.push(Validators.maxLength(question.maxLength));
        } else {
          //set default max length for all input without max length
          validation.push(Validators.maxLength(Constants.DYNAMIC_FORMS_DEFAULT_MAX_LENGTH));
        }

        let value = question.value || '';


        group[question.key] = new FormControl({
          value: value,
          disabled: question.disabled
        }, validation);
      }

      if (question.controlType === Constants.DYNAMIC_FORMS_CONTAINER) {
        this.formQuestion(question.questions, group);
      }
    });
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
