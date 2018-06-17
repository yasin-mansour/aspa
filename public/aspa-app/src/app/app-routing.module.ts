import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RouteConstants} from './utils/route-constants';
import {AppGuard} from './core/guards/app-guard';
import {LoginComponent, AuthComponent, S404Component} from './shared';

const appRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: RouteConstants.LOGIN,
        component: LoginComponent
      },
      {
        path: RouteConstants.ADMIN,
        loadChildren: 'app/admin/admin.module#AdminModule'
      },
      {
        path: RouteConstants.CLIENT,
        loadChildren: 'app/client/client.module#ClientModule'
      },
      {
        path: RouteConstants.HOME,
        loadChildren: 'app/home/home.module#HomeModule'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
