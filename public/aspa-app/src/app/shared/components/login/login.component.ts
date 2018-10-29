import {Component, OnInit} from '@angular/core';
import {HttpCommunicationService} from '../../../core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginConfig = [];

  constructor(private http: HttpCommunicationService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginConfig = this.getLoginJson();
  }

  getLoginJson() {
    const json = [
      {
        class: 'form',
        questions: [
          {
            value: '',
            key: 'email',
            label: 'user name',
            labelClass: 'text-white',
            placeholder: 'LOGIN.SIGN_IN_EMAIL',
            inputClass: 'form-control',
            class: 'form-group label-validation',
            required: true,
            order: 1,
            controlType: 'textbox',
            change: (form, question) => {
              form.controls['password'].updateValueAndValidity({emitEvent: false});
            }
          },
          {
            value: '',
            key: 'password',
            label: 'user name',
            labelClass: 'text-white',
            placeholder: 'LOGIN.SIGN_IN_PASSWORD',
            inputClass: 'form-control',
            class: 'form-group label-validation',
            required: true,
            order: 1,
            type: 'password',
            change: (form, question) => {
             form.controls['email'].updateValueAndValidity({emitEvent: false});
            }
          }/*,
           {
           value: false,
           key: 'remember',
           label: 'Remember Me',
           containerClass: 'checkbox',
           order: 1,
           type: 'checkbox',
           controlType: 'checkbox'
           }*/
          ,
          {
            key: 'login',
            label: 'LOGIN.SIGN_IN_BUTTON',
            inputClass: 'btn btn-info btn-md',
            order: 1,
            controlType: 'button',
            outForm: true,
            submitActions: [
              {
                type: 'request',
                requestType: 'post',
                uri: '/login',
                isAbsoluteUri: false,
                defaultResponse: this.handleResponse.bind(this)
              }
            ]
          }
        ],
        controlType: 'container'
      }
    ];

    return json;
  }

  handleResponse(subscribe, form, questions) {
    subscribe.subscribe(response => {
      console.log(response);
      this.http.setUser(response);
      if (this.http.user && this.http.user.role_type === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    }, err => {
      if (err && err.error && err.error.errors && err.error.errors.email && err.error.errors.email.indexOf('These credentials do not match our records.') !== -1) {
        const emailControl = form.controls['email'];
        const passwordControl = form.controls['password'];
        emailControl.setErrors({notUnique: true});
        passwordControl.setErrors({notUnique: true});
      }
    });
  }
}
