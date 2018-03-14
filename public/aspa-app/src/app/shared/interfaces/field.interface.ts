import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../core/classes/question-base';

export interface Field {
  question: QuestionBase<any>;
  form: FormGroup;
}
