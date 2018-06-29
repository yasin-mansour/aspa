import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {CardV1} from '../../interfaces/card-v1.interface';
@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent {
  @Input() questions;
  @Input() display = false;
  @Output() displayChange = new EventEmitter();
  form;

  constructor() {
  }

  hide() {
    this.display = false;
    this.displayChange.emit(false);
  }

  onForm(event) {
    this.form = event;
  }

}
