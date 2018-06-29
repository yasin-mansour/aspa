import {QuestionBase} from './question-base';
import {Constants} from "../../utils/constants";

export class DatePickerQuestion extends QuestionBase<string> {
  controlType = Constants.DYNAMIC_FORMS_DATE_PICKER;
  minDate;
  maxDate;
  dateFormat;
  styleClass;

  constructor(options: {} = {}) {
    super(options);
    this.minDate = options['minDate'] || new Date();
    this.maxDate = options['maxDate'] || null;
    this.dateFormat = options['dateFormate'] || 'mm/dd/yyyy';
    this.styleClass = options['styleClass'] || '';
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
