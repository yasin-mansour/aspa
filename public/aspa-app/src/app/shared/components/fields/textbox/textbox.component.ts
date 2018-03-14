import {Component, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class FormTextBoxComponent {
  question: QuestionBase<any>;
  form: FormGroup;
}
