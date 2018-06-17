import {Component, ViewContainerRef, ElementRef, Renderer2, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';
import {componentAddClass} from '../../../../utils/utils';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit{
  question: QuestionBase<any>;
  form: FormGroup;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  get isTouched() {
    return this.form.controls[this.question.key].touched;
  }

  get error() {
    return this.form.controls[this.question.key].errors;
  }

  get controlValue() {
    return this.form.controls[this.question.key].value;
  }

  ngOnInit() {
    componentAddClass(this.renderer, this.hostElement, this.question.containerClass);
  }
}
