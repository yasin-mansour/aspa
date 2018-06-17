import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export function maxValueValidator(maxValue: number, message: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        var num = +control.value;
        if (isNaN(num) || num > maxValue) {
            return {
                maxValue: {valid: false, message: message}
            };
        }
        return null;
    };
}

@Directive({
    selector: '[maxValue]',
    providers: [{provide: NG_VALIDATORS, useExisting: MaxValueValidatorDirective, multi: true}]
})
export class MaxValueValidatorDirective implements Validator {
    @Input() maxValue: number;

    validate(control: AbstractControl): { [key: string]: any } {
        var num = +control.value;
        if (isNaN(num) || num > this.maxValue) {
            return {
                maxValue: {valid: false}
            };
        }
        return null;
    }
}

