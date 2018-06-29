import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../core/classes/question-base';

export interface Field {
  questions: Array<QuestionBase<any>>;
  question: QuestionBase<any>;
  form: FormGroup;
}
