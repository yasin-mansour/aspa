import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  LoginComponent,
  AuthComponent,
  DynamicFormComponent,
  FormDropdownComponent,
  FormTextBoxComponent,
  FormCheckboxComponent,
  DynamicFieldDirective
} from './';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
    DynamicFieldDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    AuthComponent,
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
    DynamicFieldDirective
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent
  ]
})
export class SharedModule {
}
