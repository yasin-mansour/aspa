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
  pattern: string;
  maxLengthMessage: string;
  minLengthMessage: string;
  maxValueMessage: string;
  minValueMessage: string;
  requiredMessage: string;
  patternMessage: string;
  confirm: string;
  change: () => void;
  visible: boolean;

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
                pattern?: string,
                maxLengthMessage?: string,
                minLengthMessage?: string,
                maxValueMessage?: string,
                minValueMessage?: string,
                requiredMessage?: string,
                patternMessage?: string,
                confirm?: string,
                change?: () => void,
                visible?: boolean,
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
    this.minValue = isNaN(options.minValue) ? null : options.minValue;
    this.maxValue = isNaN(options.maxValue) ? null : options.maxValue;
    this.pattern = options.pattern || null;
    this.maxLengthMessage = options.maxLengthMessage || null;
    this.minLengthMessage = options.minLengthMessage || null;
    this.maxValueMessage = options.maxValueMessage || null;
    this.minValueMessage = options.minValueMessage || null;
    this.requiredMessage = options.requiredMessage || null;
    this.patternMessage = options.patternMessage || null;
    this.confirm = options.confirm || null;
    this.change = !!options.change ? options.change : null;
    this.visible = options.visible === false ? false : true;
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
