import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent {
  _error = {};
  keys = [];
  display;

  @Input()
  set error(val) {
    if (val) {
      console.log(val);
      this._error = val['error'] || {};
      this.keys = Object.keys(this._error['errors'] || {});
      this.display = true;
    }
  }

  get error() {
    return this._error;
  }


  constructor() {
  }

  hide() {
    this.display = false;
  }
}
