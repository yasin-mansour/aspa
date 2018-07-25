import {Validators} from '@angular/forms';
import {maxValueValidator} from '../shared/validation/max-value/max-value.directive';
import {minValueValidator} from '../shared/validation/min-value/min-value.directive';
import {uinqueValidator} from '../shared/validation/unique/unique.directive';
import {Constants} from './constants';
import * as _ from 'lodash';

export function componentAddClass(renderer, hostElement, componentClass) {
  if (Array.isArray(componentClass)) {
    componentClass.map(className => {
      renderer.addClass(hostElement.nativeElement, className);
    });
  } else if (componentClass) {
    renderer.addClass(hostElement.nativeElement, componentClass);
  }
}

export function issueDateList() {
  const lastYear = new Date().getFullYear();

  const options = [];

  for (let i = lastYear; i > 1970; i--) {
    options.push({label: `${i} - ${i - 1}`, value: `${i} - ${i - 1}`});
  }

  return options;
}

export function findQuestion(questions, path) {
  if (!path || !questions) {
    return null;
  }

  const keys = path.split('.');
  let question = questions;
  keys.map(key => {
    question = _.find(question, {key});
    if (question.questions) {
      question = question.questions;
    }
  });

  return question;
}


export function updateValidation(form, key, questions, path, updateQuestion: (question) => {}) {

  const control = form.controls[key];
  let question = findQuestion(questions, path);
  question = updateQuestion(question);
  const validation = setValidation(question);
  control.setValidators(validation);
  control.updateValueAndValidity({emitEvent: false});
}
export function setValidation(question) {
  const validation = [];
  if (question.required) {
    validation.push(Validators.required);
  }

  if (question.unique) {
    validation.push(uinqueValidator(question.unique, question.key, ''));
  }
  if (question.pattern) {
    validation.push(Validators.pattern(question.pattern));
  }

  if (question.maxValue !== null) {
    validation.push(maxValueValidator(question.maxValue, question.maxValueMessage));
  }

  if (question.minValue !== null) {
    validation.push(minValueValidator(question.minValue, question.minValueMessage));
  }

  if (question.minLength !== null) {
    validation.push(Validators.minLength(question.minLength));
  }

  if (question.maxLength !== null) {
    validation.push(Validators.maxLength(question.maxLength));
  } else {
    // set default max length for all input without max length
    validation.push(Validators.maxLength(Constants.DYNAMIC_FORMS_DEFAULT_MAX_LENGTH));
  }

  return validation;
}
