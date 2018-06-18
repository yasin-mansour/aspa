import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {QuestionBase} from '../classes/question-base';
import {Constants} from '../../utils/constants';
import {setValidation} from "../../utils/utils";


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

        const validation = setValidation(question);

        let value = isNaN(question.value)? '' : question.value;


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
