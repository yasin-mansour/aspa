import {Injectable} from '@angular/core';
import {DropdownQuestion} from '../classes/question-dropdown';
import {TextboxQuestion} from '../classes/question-textbox';
import {CheckboxQuestion} from '../classes/question-checkbox';
import {ButtonQuestion} from '../classes/question-button';
import {QuestionBase} from '../classes/question-base';
import {QuestionsQuestion} from '../classes/question-questions';
import {QuestionsHtml} from '../classes/question-html';
import {MaskQuestion} from '../classes/question-mask';
import {AutoCompleteQuestion} from '../classes/question-auto-complete';
import {QuestionsRadio} from '../classes/question-radio';
import {DatePickerQuestion} from '../classes/question-date-picker';
import {FileQuestion} from '../classes/question-file';
import {Constants} from '../../utils/constants';


@Injectable()
export class BuildQuestions {

  build(configData: Array<any>) {

    return this.buildAll(configData);
  }

  buildAll(configData: Array<any>) {
    const questions: QuestionBase<any>[] = [];

    for (let i = 0; i < configData.length; i++) {

      let question;
      const config = configData[i];

      switch (config.controlType) {
        case Constants.DYNAMIC_FORMS_DROPDOWN : {
          question = new DropdownQuestion({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType,
            options: config.options,
            name: config.name,
            placeholder: config.placeholder,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            change: config.change,
            onFocus: config.onFocus,
            disabled: config.disabled,
            optionLabel: config.optionLabel,
            optionValue: config.optionValue,
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_CHECKBOX : {
          question = new CheckboxQuestion({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType,
            name: config.name,
            placeholder: config.placeholder,
            type: config.type,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            change: config.change,
            onFocus: config.onFocus,
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_CONTAINER : {
          question = new QuestionsQuestion({
            key: config.key,
            label: config.label,
            order: config.order,
            controlType: config.controlType,
            name: config.name,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            questions: this.buildAll(config.questions)
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_HTML : {
          question = new QuestionsHtml({
            key: config.key,
            label: config.label,
            order: config.order,
            controlType: config.controlType,
            name: config.name,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            html: config.html
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_BUTTON : {
          question = new ButtonQuestion({
            key: config.key,
            label: config.label,
            order: config.order,
            controlType: config.controlType,
            name: config.name,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            submitActions: config.submitActions,
            responseActions: config.responseActions,
            errorActions: config.errorActions,
            outForm: config.outForm
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_MASK  : {
          question = new MaskQuestion({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType || Constants.DYNAMIC_FORMS_TEXTBOX,
            name: config.name,
            placeholder: config.placeholder,
            type: config.type,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            minLength: config.minLength,
            maxLength: config.maxLength,
            minValue: config.minValue,
            maxValue: config.maxValue,
            pattern: config.pattern,
            maxLengthMessage: config.maxLengthMessage,
            minLengthMessage: config.minLengthMessage,
            maxValueMessage: config.maxValueMessage,
            minValueMessage: config.minValueMessage,
            requiredMessage: config.requiredMessage,
            patternMessage: config.patternMessage,
            confirm: config.confirm,
            change: config.change,
            onFocus: config.onFocus,
            mask: config.mask,
            visible: config.visible,
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_AUTO_COMPLETE  : {
          question = new AutoCompleteQuestion({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType || Constants.DYNAMIC_FORMS_TEXTBOX,
            name: config.name,
            placeholder: config.placeholder,
            type: config.type,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            minLength: config.minLength,
            maxLength: config.maxLength,
            minValue: config.minValue,
            maxValue: config.maxValue,
            pattern: config.pattern,
            maxLengthMessage: config.maxLengthMessage,
            minLengthMessage: config.minLengthMessage,
            maxValueMessage: config.maxValueMessage,
            minValueMessage: config.minValueMessage,
            requiredMessage: config.requiredMessage,
            patternMessage: config.patternMessage,
            change: config.change,
            onFocus: config.onFocus,
            filter: config.filter,
            filtered: config.filtered,
            field: config.field,
            multiple: config.field,
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_RADIO: {
          question = new QuestionsRadio({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType || Constants.DYNAMIC_FORMS_TEXTBOX,
            name: config.name,
            placeholder: config.placeholder,
            type: config.type,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            minLength: config.minLength,
            maxLength: config.maxLength,
            minValue: config.minValue,
            maxValue: config.maxValue,
            pattern: config.pattern,
            maxLengthMessage: config.maxLengthMessage,
            minLengthMessage: config.minLengthMessage,
            maxValueMessage: config.maxValueMessage,
            minValueMessage: config.minValueMessage,
            requiredMessage: config.requiredMessage,
            patternMessage: config.patternMessage,
            change: config.change,
            onFocus: config.onFocus,
            visible: config.visible,
            options: config.options,
            groupName: config.groupName,
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_DATE_PICKER: {
          question = new DatePickerQuestion({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType,
            name: config.name,
            placeholder: config.placeholder,
            type: config.type,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            minLength: config.minLength,
            maxLength: config.maxLength,
            minValue: config.minValue,
            maxValue: config.maxValue,
            pattern: config.pattern,
            maxLengthMessage: config.maxLengthMessage,
            minLengthMessage: config.minLengthMessage,
            maxValueMessage: config.maxValueMessage,
            minValueMessage: config.minValueMessage,
            requiredMessage: config.requiredMessage,
            patternMessage: config.patternMessage,
            change: config.change,
            onFocus: config.onFocus,
            visible: config.visible,
            disabled: config.disabled,
            minDate: config.minDate,
            maxDate: config.maxDate,
            styleClass: config.styleClass,
          });
          break;
        }
        case Constants.DYNAMIC_FORMS_FILE: {
          question = new FileQuestion({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType,
            name: config.name,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            minLength: config.minLength,
            maxLength: config.maxLength,
            minValue: config.minValue,
            maxValue: config.maxValue,
            maxLengthMessage: config.maxLengthMessage,
            minLengthMessage: config.minLengthMessage,
            maxValueMessage: config.maxValueMessage,
            minValueMessage: config.minValueMessage,
            requiredMessage: config.requiredMessage,
            patternMessage: config.patternMessage,
            change: config.change,
            onFocus: config.onFocus,
            visible: config.visible,
            disabled: config.disabled,
            minDate: config.minDate,
            maxDate: config.maxDate,
            styleClass: config.styleClass,
            options: config.options,
          });
          break;
        }
        default: {
          question = new TextboxQuestion({
            value: config.value,
            key: config.key,
            label: config.label,
            required: config.required,
            order: config.order,
            controlType: config.controlType || Constants.DYNAMIC_FORMS_TEXTBOX,
            name: config.name,
            placeholder: config.placeholder,
            type: config.type,
            inputClass: config.inputClass,
            labelClass: config.labelClass,
            class: config.class,
            containerClass: config.containerClass,
            minLength: config.minLength,
            maxLength: config.maxLength,
            minValue: config.minValue,
            maxValue: config.maxValue,
            pattern: config.pattern,
            maxLengthMessage: config.maxLengthMessage,
            minLengthMessage: config.minLengthMessage,
            maxValueMessage: config.maxValueMessage,
            minValueMessage: config.minValueMessage,
            requiredMessage: config.requiredMessage,
            patternMessage: config.patternMessage,
            confirm: config.confirm,
            change: config.change,
            onFocus: config.onFocus,
            visible: config.visible,
            unique: config.unique,
          });
          break;
        }
      }

      questions.push(question);
    }

    return questions;
  }

}
