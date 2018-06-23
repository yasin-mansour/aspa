import { QuestionBase } from './question-base';

export class AutoCompleteQuestion extends QuestionBase<string> {
  controlType = 'auto_complete';
  filter: () => void;
  filtered = [];
  field;
  multiple;

  constructor(options: {} = {}) {
    super(options);
    this.multiple = !!options['multiple'];
    this.field = options['field'] || '';
    this.filtered = options['filtered'] || [];
    this.filter = !!options['filter'] ? options['filter'] : null;
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
