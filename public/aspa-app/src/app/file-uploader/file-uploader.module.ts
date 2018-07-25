import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FileUploaderComponent} from './';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    FileUploaderComponent
  ],
  providers: [],
  bootstrap: [],
  entryComponents: []
})
export class FileUploaderModule {
}
