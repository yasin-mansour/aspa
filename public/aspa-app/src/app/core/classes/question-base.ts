export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  name: string;
  placeholder: string;
  inputClass: string;
  class: string;
  containerClass: string;
  outForm: boolean;
  minLength: number;
  maxLength: number;
  minValue: number;
  maxValue: number;

  constructor(options: {
                value?: T,
                key?: string,
                label?: string,
                required?: boolean,
                order?: number,
                controlType?: string,
                name?: string,
                placeholder?: string,
                inputClass?: string,
                class?: string,
                containerClass?: string,
                outForm?: boolean,
                minLength?: number,
                maxLength?: number,
                minValue?: number,
                maxValue?: number,
              } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.name = options.name || '';
    this.placeholder = options.placeholder || '';
    this.inputClass = options.inputClass || '';
    this.class = options.class || '';
    this.containerClass = options.containerClass || '';
    this.outForm = !!options.outForm;
    this.minLength = options.minLength || null;
    this.maxLength = options.maxLength || null;
    this.minValue = options.minValue || null;
    this.maxValue = options.maxValue || null;
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
