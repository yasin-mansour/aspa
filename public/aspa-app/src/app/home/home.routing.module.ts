import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent, RegisterComponent, WelcomePageComponent} from './';
import {RouteConstants} from '../utils/route-constants';
import {RegisterGuard} from '../core/guards/register-guard';
import {LoginComponent} from '../shared';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path: RouteConstants.REGISTER,
        canActivate: [RegisterGuard],
        component: RegisterComponent,
      },
      {
        path: RouteConstants.LOGIN,
        canActivate: [RegisterGuard],
        component: LoginComponent
      },
      {
        path: '',
        component: WelcomePageComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
