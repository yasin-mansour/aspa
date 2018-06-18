import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export function passwordValidator(confControl): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const password = control.value;
    if (password !== confControl.value) {
      return {
        password: {valid: false}
      };
    }
    return null;
  };
}

@Directive({
    selector: '[confirmPassword]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})
export class PasswordValidatorDirective implements Validator {
    @Input() confirmPassword: string;

    validate(control: AbstractControl): { [key: string]: any } {
        const passwordString = control.value;
        if (passwordString !== this.confirmPassword) {
            return {
                confirmPassword: {valid: false}
            };
        }
        return null;
    }
}

