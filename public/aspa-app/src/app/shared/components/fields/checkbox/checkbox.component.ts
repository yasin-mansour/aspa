import {Component, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class FormCheckboxComponent {
  question: QuestionBase<any>;
  form: FormGroup;
}
