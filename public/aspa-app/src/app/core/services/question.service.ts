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
            class: config.class,
            containerClass: config.containerClass
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
            class: config.class,
            containerClass: config.containerClass
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
            filter: config.filter,
            filtered: config.filtered,
            field: config.field,
            multiple: config.field,
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
            visible: config.visible,
          });
          break;
        }
      }

      questions.push(question);
    }

    return questions;
  }

}
