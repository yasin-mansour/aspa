import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export function minValueValidator(minValue: number, message: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        var num = +control.value;
        if (isNaN(num) || num < minValue) {
            return {
                minValue: {valid: false, message: message}
            };
        }
        return null;
    };
}

@Directive({
    selector: '[minValue]',
    providers: [{provide: NG_VALIDATORS, useExisting: MinValueValidatorDirective, multi: true}]
})
export class MinValueValidatorDirective implements Validator {
    @Input() minValue: number;

    validate(control: AbstractControl): { [key: string]: any } {
        var num = +control.value;
        if (isNaN(num) || num < this.minValue) {
            return {
                minValue: {valid: false}
            };
        }
        return null;
    }
}

