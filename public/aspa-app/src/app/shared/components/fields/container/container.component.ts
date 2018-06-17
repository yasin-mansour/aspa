import {Component, Input, OnInit, Renderer2, ElementRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../../../../core/classes/question-base';
import {QuestionsQuestion} from '../../../../core/classes/question-questions';
import {QuestionControlService} from '../../../../core/services/question-control.service';
import {BuildQuestions} from '../../../../core/services/question.service';
import {componentAddClass} from "../../../../utils/utils";

@Component({
  selector: 'app-form-container',
  templateUrl: './container.component.html'
})
export class FormContainerComponent implements OnInit {

  @Input() submitClass = '';
  @Input() config: Array<any>;
  subQuestions: QuestionBase<any>[] = [];
  question: QuestionsQuestion;
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService,
              private buildQuestions: BuildQuestions,
              private renderer: Renderer2,
              private hostElement: ElementRef) {
  }

  ngOnInit() {
    componentAddClass(this.renderer, this.hostElement, this.question.containerClass);
    this.subQuestions = this.buildQuestions.build(this.question.questions);

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
