import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularSplitModule
  ],
  exports: [
    CommonModule,
    AngularSplitModule,
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
