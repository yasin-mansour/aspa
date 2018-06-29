import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FormDropdownComponent} from '../components/fields/dropdown/dropdown.component';
import {FormTextBoxComponent} from '../components/fields/textbox/textbox.component';
import {FormCheckboxComponent} from '../components/fields/checkbox/checkbox.component';
import {FormButtonComponent} from '../components/fields/button/button.component';
import {FormContainerComponent} from '../components/fields/container/container.component';
import {FormHtmlComponent} from '../components/fields/html/html.component';
import {FormMaskComponent} from '../components/fields/mask/mask.component';
import {FormAutoCompleteComponent} from '../components/fields/auto-complete/auto-complete.component';
import {FormRadioComponent} from '../components/fields/radio/radio.component';
import {Field} from '../interfaces/field.interface';
import {QuestionBase} from '../../core/classes/question-base';
import {FormDatePickerComponent} from '../components/fields/date-picker/date-picker.component';

const components: { [type: string]: Type<any> } = {
  textbox: FormTextBoxComponent,
  dropdown: FormDropdownComponent,
  checkbox: FormCheckboxComponent,
  button: FormButtonComponent,
  container: FormContainerComponent,
  html: FormHtmlComponent,
  mask: FormMaskComponent,
  auto_complete: FormAutoCompleteComponent,
  radio: FormRadioComponent,
  date_picker: FormDatePickerComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {

  @Input()
  questions: Array<QuestionBase<any>>;

  @Input()
  question: QuestionBase<any>;

  @Input()
  form: FormGroup;

  component: ComponentRef<Field>;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.question = this.question;
      this.component.instance.form = this.form;
    }
  }

  ngOnInit() {
    if (!components[this.question.controlType]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.question.controlType}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.question.controlType]);
    this.component = this.container.createComponent(component);
    console.log(this.component);
    this.component.instance.questions = this.questions;
    this.component.instance.question = this.question;
    this.component.instance.form = this.form;
  }
}
