import { QuestionBase } from './question-base';

export class MaskQuestion extends QuestionBase<string> {
  controlType = 'mask';
  mask: string;

  constructor(options: {} = {}) {
    super(options);
    this.mask = options['mask'] || '9';
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
