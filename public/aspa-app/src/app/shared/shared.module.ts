import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AngularSplitModule } from 'angular-split';

import {
  LoginComponent,
  AuthComponent,
  DynamicFormComponent,
  FormDropdownComponent,
  FormTextBoxComponent,
  FormCheckboxComponent,
  DynamicFieldDirective,
  FormButtonComponent,
  ElementIndexerDirective,
  PageComponent,
  DynamicPageDirective,
  S404Component,
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
    DynamicFieldDirective,
    FormButtonComponent,
    ElementIndexerDirective,
    PageComponent,
    DynamicPageDirective,
    S404Component
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularSplitModule
  ],
  exports: [
    LoginComponent,
    AuthComponent,
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
    DynamicFieldDirective,
    FormButtonComponent,
    ElementIndexerDirective,
    PageComponent,
    DynamicPageDirective,
    S404Component,
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
    FormButtonComponent,
    PageComponent
  ]
})
export class SharedModule {
}
