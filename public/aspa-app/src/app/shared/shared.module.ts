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
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {ScheduleModule} from 'primeng/schedule';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FileUploaderModule} from '../file-uploader/file-uploader.module';

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
  FormMaskComponent,
  RegisterComponent,
  CardV1Component,
  FormAutoCompleteComponent,
  DialogFormComponent,
  FormRadioComponent,
  FormDatePickerComponent,
  UinqueValidatorDirective,
  FormFileUploadComponent,
  LocalizeInputComponent,
  PasswordValidatorDirective,
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
    FormMaskComponent,
    RegisterComponent,
    CardV1Component,
    FormAutoCompleteComponent,
    DialogFormComponent,
    FormRadioComponent,
    FormDatePickerComponent,
    UinqueValidatorDirective,
    FormFileUploadComponent,
    LocalizeInputComponent,
    PasswordValidatorDirective
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
    InputMaskModule,
    ScrollPanelModule,
    AutoCompleteModule,
    DialogModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    ScheduleModule,
    OverlayPanelModule,
    FileUploaderModule
  ],
  exports: [
    CommonModule,
    AngularSplitModule,
    FormsModule,
    ReactiveFormsModule,
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
    FormMaskComponent,
    RegisterComponent,
    ScrollPanelModule,
    CardV1Component,
    DialogModule,
    FormAutoCompleteComponent,
    DialogFormComponent,
    ButtonModule,
    ScheduleModule,
    OverlayPanelModule,
    FileUploaderModule,
    LocalizeInputComponent,
    PasswordValidatorDirective
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
    FormMaskComponent,
    FormAutoCompleteComponent,
    FormRadioComponent,
    FormDatePickerComponent,
    FormFileUploadComponent
  ]
})
export class SharedModule {
}
