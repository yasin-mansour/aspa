import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {TranslateModule} from '@ngx-translate/core';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';

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
  DynamicBindingDirective,
  FormContainerComponent,
  FormHtmlComponent,
  ErrorMessageComponent,
  MaxValueValidatorDirective,
  MinValueValidatorDirective,
  FormMaskComponent
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
    S404Component,
    DynamicBindingDirective,
    FormContainerComponent,
    FormHtmlComponent,
    ErrorMessageComponent,
    MaxValueValidatorDirective,
    MinValueValidatorDirective,
    FormMaskComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularSplitModule,
    MenubarModule,
    TableModule,
    TranslateModule,
    DropdownModule,
    InputMaskModule
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
    MenubarModule,
    TableModule,
    DynamicBindingDirective,
    TranslateModule,
    FormContainerComponent,
    DropdownModule,
    FormHtmlComponent,
    ErrorMessageComponent,
    FormMaskComponent
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
    FormButtonComponent,
    FormContainerComponent,
    PageComponent,
    FormHtmlComponent,
    FormMaskComponent
  ]
})
export class SharedModule {
}
