import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';
import * as _ from 'lodash';

export function uinqueValidator(list, name: string, message: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const objectToFind = {};
    objectToFind[name] = control.value || '';
    const item = _.find(list(), objectToFind);
    if (item) {
      return {
        maxValue: {valid: false}
      };
    }
    return null;
  };
}

@Directive({
  selector: '[unique]',
  providers: [{provide: NG_VALIDATORS, useExisting: UinqueValidatorDirective, multi: true}]
})
export class UinqueValidatorDirective implements Validator {
  @Input() list: Array<any>;
  @Input() name: string;

  validate(control: AbstractControl): { [key: string]: any } {
    const objectToFind = {};
    objectToFind[this.name] = control.value || '';
    const item = _.find(this.list, objectToFind);
    if (item) {
      return {
        maxValue: {valid: false}
      };
    }
    return null;
  }
}

