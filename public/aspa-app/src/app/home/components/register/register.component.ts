import {Component, Input, OnInit} from '@angular/core';
import {issueDateList} from "../../../utils/utils";
import {Constants} from "../../../utils/constants";
import {HttpCommunicationService, ErrorHandlerService} from '../../../core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerConfig = this.getLoginJson();

  constructor(private http: HttpCommunicationService,
              private errorHandler: ErrorHandlerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  getLoginJson() {
    const issueDateOptions = issueDateList();
    const json = [
      {
        key: 'user_id',
        value: 0,
        visible: false
      }, {
        key: 'q_id',
        value: 0,
        visible: false
      }, {
        key: 'org_id',
        value: 0,
        visible: false
      },
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'first_name',
            label: 'reg-first-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-5'],
            required: true,
            order: 1,
            controlType: 'textbox',
            minLength: 3
          },
          {
            value: '',
            key: 'last_name',
            label: 'reg-last-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-5'],
            required: true,
            order: 1,
            type: 'textbox',
            minLength: 3
          }
          ,
          {
            value: '',
            key: 'gender',
            label: 'reg-gender',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-2'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: [{label: 'gender-male', value: 'male'}, {label: 'gender-female', value: 'female'}]
          }
        ],
        controlType: 'container'
      },
      {
        questions: [
          {
            value: '',
            key: 'country',
            label: 'reg-country',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            /*required: true,*/
            order: 1,
            controlType: 'dropdown',
            options: []
          },
          {
            value: '',
            key: 'city',
            label: 'reg-city',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            /*required: true,*/
            order: 1,
            controlType: 'dropdown',
            options: []
          },
          {
            value: '',
            key: 'nationality',
            label: 'reg-nationality',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            /*required: true,*/
            order: 1,
            controlType: 'textbox',
          }
        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'english_level',
            label: 'reg-english_level',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            /*required: true,*/
            order: 1,
            controlType: 'dropdown',
            options: [{label: 'en-native', value: 'en-native'},
              {label: 'en-fluent', value: 'en-fluent'},
              {label: 'en-proficient', value: 'en-proficient'},
              {label: 'en-conversant', value: 'en-conversant'},
              {label: 'en-basic-knowledge', value: 'en-basic-knowledge'},
            ]
          },
          {
            value: '',
            key: 'phone',
            label: 'reg-phone',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-6'],
            required: true,
            order: 1,
            controlType: 'mask',
            mask: '999-9999-999'
          },
          {
            value: '',
            key: 'experience_year',
            label: 'reg-experience',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            minValue: 0,
            order: 1,
            controlType: 'textbox',
            type: 'number'
          }
        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'q_name',
            label: 'reg-q-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: [{label: 'q-undergraduate', value: 'q-undergraduate'},
              {label: 'q-associate', value: 'q-associate'},
              {label: 'q-bachelor', value: 'q-bachelor'},
              {label: 'q-master', value: 'q-master'},
              {label: 'q-doctoral', value: 'q-doctoral'},
              {label: 'q-professional', value: 'q-professional'}]
          },
          {
            value: '',
            key: 'q_major',
            label: 'reg-q-major',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: [{label: 'test', value: 'test'}]
          },
          {
            value: '',
            key: 'q_issue_date',
            label: 'reg-q-issue-date',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: issueDateOptions
          }

        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'org_name',
            label: 'reg-org-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            /*required: true,*/
            order: 1,
            controlType: 'textbox'
          },
          {
            value: '',
            key: 'org_type',
            label: 'reg-org-type',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            /*required: true,*/
            order: 1,
            controlType: 'dropdown',
            options: [{label: 'org-corporations', value: 'org-corporations'},
              {label: 'org-governments', value: 'org-governments'},
              {label: 'org-non-governmental', value: 'org-non-governmental'},
              {label: 'org-political', value: 'org-political'},
              {label: 'org-international', value: 'org-international'},
              {label: 'org-not-for-profit', value: 'org-not-for-profit'},
              {label: 'org-partnerships', value: 'org-partnerships'},
              {label: 'org-cooperatives', value: 'org-cooperatives'},
              {label: 'org-educational-institutions', value: 'org-educational-institutions'}]
          }, {
            value: '',
            key: 'org_position',
            label: 'reg-position',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            /*required: true,*/
            order: 1,
            controlType: 'textbox',
          },
          {
            value: '',
            key: 'org_address',
            label: 'reg-org-address',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            /*required: true,*/
            order: 1,
            controlType: 'textbox'
          }

        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'org_phone',
            label: 'reg-org-phone',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-6'],
            /*required: true,*/
            order: 1,
            controlType: 'mask',
            mask: '999-9999-999'
          },
          {
            value: '',
            key: 'org_fax',
            label: 'reg-org-fax',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-6'],
            /*required: true,*/
            order: 1,
            controlType: 'mask',
            mask: '999-9999-999'
          }

        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'email',
            label: 'reg-email',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-12'],
            required: true,
            pattern: Constants.EMAIL_REGEX,
            order: 1,
            controlType: 'textbox'
          }
        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'password',
            label: 'reg-password',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-12'],
            required: true,
            minLength: 6,
            pattern: /^[a-zA-Z0-9!@#\$%\^&\*]+$/i,
            order: 1,
            controlType: 'textbox',
            change: (form, question) => {
              form.controls['password_confirmation'].updateValueAndValidity({emitEvent: false});
            }
          }
        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'password_confirmation',
            label: 'reg-password-confirmation',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-12'],
            required: true,
            confirm: 'password',
            order: 1,
            controlType: 'textbox'
          }
        ],
        controlType: 'container',
        class: 'row'
      },
      {
        key: 'login',
        label: 'LOGIN.SIGN_IN_BUTTON',
        inputClass: 'btn btn-lg btn-success btn-block',
        order: 1,
        controlType: 'button',
        outForm: true,
        submitActions: [
          {
            type: 'request',
            requestType: 'post',
            uri: '/register',
            isAbsoluteUri: false,
            defaultResponse: this.handleResponse.bind(this)
          }
        ]
      }
    ];

    return json;

  }

  handleResponse(subscribe) {
    subscribe.subscribe(response => {
      this.http.setUser(response);
      if (this.http.user && this.http.user.role_type === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    }, err => {
        this.errorHandler.handleError(err);
    });
  }
}