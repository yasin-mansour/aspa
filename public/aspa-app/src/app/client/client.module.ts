import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientRoutingModule} from './client.routing.module';
import {DashboardComponent, ClientContainerComponent, RegisterComponent} from './';

@NgModule({
  declarations: [
    ClientContainerComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    ClientRoutingModule
  ],
  providers: [
  ],
  bootstrap: [],
  exports: [
  ]
})
export class ClientModule { }
