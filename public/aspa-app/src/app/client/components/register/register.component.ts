import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerConfig = this.getLoginJson();

  constructor() {
  }

  ngOnInit() {
  }

  getLoginJson() {

    const json = [
      {
        class: 'row col-md-12',
        html: '<a>aaaa</a>',
        controlType: 'html'
      },
      {
        class: 'row',
        questions: [
          {
            value: '',
            key: 'first-name',
            label: 'reg-first-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-5'],
            required: true,
            order: 1,
            controlType: 'textbox',
          },
          {
            value: '',
            key: 'last-name',
            label: 'reg-last-name',
            inputClass: 'form-control',
            containerClass: ['col-md-5'],
            required: true,
            order: 1,
            type: 'textbox',
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
            required: true,
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
            required: true,
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
            required: true,
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
            key: 'phone',
            label: 'reg-phone',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-6'],
            required: true,
            order: 1,
            controlType: 'textbox',
          },
          {
            value: '',
            key: 'english',
            label: 'reg-english',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: []
          },
          {
            value: '',
            key: 'experience',
            label: 'reg-experience',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            required: true,
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
            key: 'qualification',
            label: 'reg-qualification',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: []
          },
          {
            value: '',
            key: 'major',
            label: 'reg-major',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: []
          },
          {
            value: '',
            key: 'issue-date',
            label: 'reg-issue-date',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-4'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: []
          }

        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions: [
          {
            value: '',
            key: 'org-name',
            label: 'reg-org-name',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            required: true,
            order: 1,
            controlType: 'textbox',
          },
          {
            value: '',
            key: 'org-type',
            label: 'reg-org-type',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            required: true,
            order: 1,
            controlType: 'dropdown',
            options: []
          }, {
            value: '',
            key: 'position',
            label: 'reg-position',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            required: true,
            order: 1,
            controlType: 'textbox',
          },
          {
            value: '',
            key: 'org-address',
            label: 'reg-org-address',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-3'],
            required: true,
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
            key: 'org-phone',
            label: 'reg-org-phone',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-6'],
            required: true,
            order: 1,
            controlType: 'textbox',
          },
          {
            value: '',
            key: 'org-fax',
            label: 'reg-org-fax',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-6'],
            required: true,
            order: 1,
            controlType: 'textbox'
          }

        ],
        controlType: 'container',
        class: 'row'
      },
      {
       questions:[
         {
           value: '',
           key: 'email',
           label: 'reg-email',
           inputClass: 'form-control',
           class: 'form-group',
           containerClass: ['col-md-12'],
           required: true,
           order: 1,
           controlType: 'textbox'
         }
       ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions:[
          {
            value: '',
            key: 'password',
            label: 'reg-password',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-12'],
            required: true,
            order: 1,
            controlType: 'textbox'
          }
        ],
        controlType: 'container',
        class: 'row'
      },
      {
        questions:[
          {
            value: '',
            key: 're-password',
            label: 'reg-re-password',
            inputClass: 'form-control',
            class: 'form-group',
            containerClass: ['col-md-12'],
            required: true,
            order: 1,
            controlType: 'textbox'
          }
        ],
        controlType: 'container',
        class: 'row'
      }
    ];

    return json;

  }
}
