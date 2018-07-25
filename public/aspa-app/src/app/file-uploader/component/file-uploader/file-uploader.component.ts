import {Component, OnInit, forwardRef, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS} from '@angular/forms';
import {File} from '../../interface/file-uploader.interface';

const noop = () => {
};

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true
    }
  ]
})

export class FileUploaderComponent implements ControlValueAccessor {

  files: Array<File> = [];
  selectedFiles;
  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @Output() change = new EventEmitter();
  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  // get accessor
  get value(): Array<File> {
    return this.files;
  };


  // set accessor including call the onchange callback
  set value(v: Array<File>) {
      this.files = v;
      this.change.emit(v);
  }

  get opacity() {
    return this.disabled ? 0.25 : 1;
  }


  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(files: Array<File>): void {
    this.files = files;
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

  addFiles(input) {
    const files: Array<File> = [];
    for (const file of input.files) {
      files.push({name: file.name, data: file, deleted: false, path: ''});
    }
    this.writeValue(files);
  }

  deleteFile(index) {
    const file = this.files[index];
    if (file.data) {
      this.files.splice(index, 1);
    } else {
      file.deleted = true;
    }
    this.writeValue(this.files);
  }
}
