import {Component, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../../../core/classes/question-base';
import {HttpCommunicationService} from '../../../../core';
import {environment} from '../../../../../environments/environment';
import {ElementMapService} from '../../../../core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class FormButtonComponent {
  questions: Array<QuestionBase<any>>;
  question: QuestionBase<any>;
  form: FormGroup;
  submitActions = 'submitActions';
  responseActions = 'responseActions';
  errorActions = 'errorActions';
  actionList = {
    request: this.request.bind(this),
    setElement: this.setElement.bind(this),
    redirect: this.redirect.bind(this)
  };

  requestMethod = {
    post: this.post.bind(this),
    get: this.get.bind(this)
  }

  constructor(private http: HttpCommunicationService,
              private elementMapService: ElementMapService,
              private router: Router) {
  }

  onSubmit(actionListType, data?) {
    if (this.question[actionListType]) {
      this.question[actionListType].map((action) => {
        if (this.actionList[action.type]) {
          this.actionList[action.type](action, data);
        }
      });
    }
  }

  request(action, data) {
    const {requestType} = action;
    if (action['uri']) {
      if (this.requestMethod[requestType]) {
        this.requestMethod[requestType](action, data);
      }
    }
  }

  setElement({elementName}, data) {
    console.log(this.elementMapService.getElement(elementName));
  }

  redirect({uri}) {
    if (uri) {
      this.router.navigate([uri]);
    }
  }

  post(action, data) {
    const uri = this.getUri(action);
    this.http.post(uri, data, null, false).subscribe(response => {
      this.onSubmit(this.checkResponseData(response) ? this.errorActions : this.responseActions, response);
    }, err => {
      this.onSubmit(this.errorActions, err);
    });
  }

  get(action) {
    const uri = this.getUri(action);
    this.http.get(uri).subscribe(data => {
      this.onSubmit(this.checkResponseData(data) ? this.errorActions : this.responseActions, data);
    }, err => {
      this.onSubmit(this.errorActions, err);
    });
  }

  getUri(action) {
    return action['isAbsoluteUri'] ? action['uri'] : environment.API_PATH + action['uri'];
  }

  checkResponseData(data) {
    return data.error && Object.keys(data.error);
  }
}
