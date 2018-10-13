import {Component, OnInit, forwardRef, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS} from '@angular/forms';

const noop = () => {
};

@Component({
  selector: 'app-localize-input',
  templateUrl: './localize-input.component.html',
  styleUrls: ['./localize-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LocalizeInputComponent),
      multi: true
    }
  ]
})

export class LocalizeInputComponent implements ControlValueAccessor {

  innerValue: any = {
    value: '',
    en: '',
    ar: '',
  };
  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @Output() change = new EventEmitter();
  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  // get accessor
  get value(): any {
    return this.innerValue;
  };


  // set accessor including call the onchange callback
  set value(v: any) {
    this.innerValue = v;
    this.change.emit(v);
  }

  get opacity() {
    return this.disabled ? 0.25 : 1;
  }


  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(value: any): void {
    if (typeof(value) !== 'object' || value === null) {
      this.innerValue = {
        value: value,
        en: '',
        ar: ''
      };
    } else {
      this.innerValue = value;
    }
    this.onChangeCallback(this.value);
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (files: Array<File>) => void): void {
    this.onChangeCallback = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouchedCallback = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
