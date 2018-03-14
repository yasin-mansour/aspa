import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class FormDropdownComponent  {
  question: QuestionBase<any>;
  form: FormGroup;
}
