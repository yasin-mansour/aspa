import {QuestionBase} from './question-base';

export class ButtonQuestion extends QuestionBase<string> {
  submitActions: Array<any>;
  responseActions: Array<any>;
  errorActions: Array<any>;
  /**
   * action =
   * [
   *  {
   *    name: request,
   *    type: post
   *  }
   *  .
   *  .
   *  .
   * ]
   */


  constructor(options: {} = {}) {
    super(options);
    this.submitActions = options['submitActions'] || [];
    this.responseActions = options['responseActions'] || [];
    this.errorActions = options['errorActions'] || [];
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
