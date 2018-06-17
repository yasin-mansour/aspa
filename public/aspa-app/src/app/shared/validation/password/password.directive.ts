import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';


@Directive({
    selector: '[confirmPassword]',
    providers: [{provide: NG_VALIDATORS, useExisting: passwordValidatorDirective, multi: true}]
})
export class passwordValidatorDirective implements Validator {
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

