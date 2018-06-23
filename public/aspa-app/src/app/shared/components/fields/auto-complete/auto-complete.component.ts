import {Component, ViewContainerRef, ElementRef, Renderer2, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';
import {componentAddClass, setValidation} from '../../../../utils/utils';
import {passwordValidator} from '../../../validation/password/password.directive';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class FormAutoCompleteComponent implements OnInit {
  question: QuestionBase<any>;
  form: FormGroup;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  get isValid() {
    return this.control.valid;
  }

  get isTouched() {
    return this.control.touched;
  }

  get error() {
    return this.control.errors;
  }

  get controlValue() {
    return this.control.value;
  }

  get control() {
    return this.form.controls[this.question.key];
  }

  ngOnInit() {
    componentAddClass(this.renderer, this.hostElement, this.question.containerClass);

    const change = this.question.change;
    if (this.control && change) {
      const changeCallBack = change.bind(this);
      this.control.valueChanges.subscribe(data => {
        changeCallBack(this.form, this.question);
      });
    }
  }
}
