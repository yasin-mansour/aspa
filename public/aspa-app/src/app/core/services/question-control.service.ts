import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {QuestionBase} from '../classes/question-base';
import {Constants} from "../../utils/constants";

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
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
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
