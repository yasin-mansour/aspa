import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {CardV1} from '../../interfaces/card-v1.interface';
@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent {
  @Input() questions;
  @Output() displayChange = new EventEmitter();
  @Output() onCreate = new EventEmitter();
  _display = false;
  form;
  values;
  defaultValue;

  constructor() {
  }

  @Input()
  set display(val) {
    this._display = val;
    if (val && this.form) {
      this.form.reset(this.defaultValue);
    }
  }

  get display() {
    return this._display;
  }

  hide() {
    this.display = false;
  }

  onForm(event) {
    this.form = event;
    this.defaultValue = this.form.value;
  }

  create() {
    this.onCreate.emit(this.form.value);
  }

  updateVisibility() {
    this.displayChange.emit(false);
  }
}
