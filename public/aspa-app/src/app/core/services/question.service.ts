import {Injectable} from '@angular/core';
import {DropdownQuestion} from '../classes/question-dropdown';
import {TextboxQuestion} from '../classes/question-textbox';
import {CheckboxQuestion} from '../classes/question-checkbox';
import {QuestionBase} from '../classes/question-base';
import {Constants} from '../../utils/constants';


@Injectable()
export class BuildQuestions {

  build(configData: Array<any>) {

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
            inputClass:  config.inputClass,
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
            inputClass:  config.inputClass,
            containerClass: config.containerClass
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
            inputClass:  config.inputClass,
            containerClass: config.containerClass
          });
          break;
        }
      }

      questions.push(question);
    }

    return questions;
  }
}
