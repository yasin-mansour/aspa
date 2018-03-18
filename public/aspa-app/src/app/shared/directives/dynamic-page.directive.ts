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
import {Field} from '../interfaces/field.interface';
import {QuestionBase} from '../../core/classes/question-base';

const components: { [type: string]: Type<any> } = {
  textbox: FormTextBoxComponent,
  dropdown: FormDropdownComponent,
  checkbox: FormCheckboxComponent,
  button: FormButtonComponent
};

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicPageDirective implements OnChanges, OnInit {
  @Input() config;
  @Input() name;

  component: ComponentRef<Field>;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnChanges() {
    if (this.component) {
      this.setConfig(this.component.instance, this.config);
    }
  }

  ngOnInit() {
    if (!components[this.name]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.name}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.name]);
    this.component = this.container.createComponent(component);
    this.setConfig(this.component.instance, this.config);
  }

  setConfig(parentObject, config) {
    Object.keys(config).map((name) => {
      parentObject[name] = config[name];
    });
  }
}
