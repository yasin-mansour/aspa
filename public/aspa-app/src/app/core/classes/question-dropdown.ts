import {QuestionBase} from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[] = [];
  optionLabel;
  optionValue;
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.optionLabel = options['optionLabel'] || 'label';
    this.optionValue = options['optionValue'] || 'value';
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
