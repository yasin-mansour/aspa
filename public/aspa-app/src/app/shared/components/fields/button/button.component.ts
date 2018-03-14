import {Component, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';
import {HttpCommunicationService} from '../../../../core';
import {environment} from '../../../../../environments/environment';
import {ElementMapService} from '../../../../core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class FormButtonComponent {
  question: QuestionBase<any>;
  form: FormGroup;

  actionList = {
    request: this.request.bind(this),
    updateElement: this.updateElement.bind(this)
  };

  requestMethod = {
    post: this.post.bind(this),
    get: this.get.bind(this)
  }

  constructor(private http: HttpCommunicationService,
              private elementMapService: ElementMapService) {
  }

  onSubmit() {
    if (this.question['actions']) {
      this.question['actions'].map((action) => {
        if (this.actionList[action.name]) {
          this.actionList[action.name](action);
        }
      });
    }
  }

  request({type}) {
    if (this.question['uri']) {
      if (this.requestMethod[type]) {
        this.requestMethod[type]();
      }
    }
  }

  updateElement({elementName}) {
    console.log(elementName);
    console.log(this.elementMapService.getElement(elementName));
  }

  post() {
    const uri = this.getUri();
    this.http.post(uri, this.form.getRawValue()).subscribe(data => {

    }, err => {

    });
  }

  get() {
    const uri = this.getUri();
    this.http.get(uri).subscribe(data => {

    }, err => {

    });
  }

  getUri() {
    return this.question['isAbsoluteUri'] ? this.question['uri'] : environment.API_PATH + this.question['uri'];
  }
}
