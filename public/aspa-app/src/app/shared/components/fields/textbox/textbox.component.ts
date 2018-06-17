import {Component, ViewContainerRef, ElementRef, Renderer2, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';
import {componentAddClass} from '../../../../utils/utils';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class FormTextBoxComponent implements OnInit {
  question: QuestionBase<any>;
  form: FormGroup;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  ngOnInit() {
    componentAddClass(this.renderer, this.hostElement, this.question.containerClass);
  }
}
