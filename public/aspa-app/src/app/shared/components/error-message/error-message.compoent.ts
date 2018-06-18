import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../../../core/classes/question-base';
import {QuestionControlService} from '../../../core/services/question-control.service';
import {BuildQuestions} from '../../../core/services/question.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.compoent.html',
  styleUrls: ['./error-message.compoent.css']
})
export class ErrorMessageComponent {
  _error;
  _touched;
  message;
  messageList = {
    'required': 'field-required',
    'minlength': 'field-minLength',
    'maxlength': 'field-maxLength',
    'minValue': 'field-minValue',
    'maxValue': 'field-maxValue',
    'pattern': 'field-pattern',
  }


  @Input()
  set error(val) {
    this._error = val;
    this.setError();
  }

  get error() {
    return this._error;
  }

  @Input()
  set touched(val) {
    this._touched = val;
    this.setError();
  }

  get touched() {
    return this._touched;
  }

  setError() {
    this.message = '';
    if (!this.touched || !this.error) {
      return;
    }
    if (this.error['required']) {
      this.message = this.messageList['required'];
    } else if (this.error['pattern']) {
      this.message = this.messageList['pattern'];
    } else if (this.error['maxlength']) {
      this.message = this.messageList['maxlength'];
    } else if (this.error['minlength']) {
      this.message = this.messageList['minlength'];
    } else if (this.error['maxValue']) {
      this.message = this.messageList['maxValue'];
    } else if (this.error['minValue']) {
      this.message = this.messageList['minValue'];
    } else {
      this.message = '';
    }
  }

}
