import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientContainerComponent, RegisterComponent} from './';
import {RouteConstants} from '../utils/route-constants';

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientContainerComponent
  },
  {
    path: RouteConstants.REGISTER,
    component: RegisterComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      clientRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule {
}
