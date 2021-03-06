import { QuestionBase } from './question-base';
import {Constants} from "../../utils/constants";

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = Constants.DYNAMIC_FORMS_CHECKBOX;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = Constants.DYNAMIC_FORMS_CHECKBOX;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
