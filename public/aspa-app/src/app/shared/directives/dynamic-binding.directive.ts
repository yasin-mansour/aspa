import {
  Directive,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {NgModel} from '@angular/forms';

import * as _ from 'lodash';

@Directive({
  selector: '[appBind]'
})
export class DynamicBindingDirective {
  @Input() path;
  @Input() object;
  @Input() apiManager;
  @Output() onChange = new EventEmitter();
  firstLoad = true;

  constructor(public model: NgModel) {
    this.model.valueChanges.subscribe(data => {

      if (!this.firstLoad) {
        _.set(this.object, this.path, data);
        this.onChange.emit(this.object);
        // if (this.apiManager) {
        //   this.apiManager(this.object);
        // }
      } else {
        this.firstLoad = false;
      }
    });
  }
}
