import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../../../core/classes/question-base';
import {QuestionControlService} from '../../../core/services/question-control.service';
import {BuildQuestions} from '../../../core/services/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  @Input() submitClass = '';
  @Input() config: Array<any>;
  @Output() onForm = new EventEmitter();
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private buildQuestions: BuildQuestions) {
  }

  @Input()
  set values(val) {
    if (val && Object.keys(val).length > 0) {
      this.form.setValue(val);
    }

  }

  get values() {
    return this.form.value;
  }

  ngOnInit() {
    this.questions = this.buildQuestions.build(this.config);
    this.form = this.qcs.toFormGroup(this.questions);
    this.onForm.emit(this.form);
    console.log(this.questions);
    console.log(this.form);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
