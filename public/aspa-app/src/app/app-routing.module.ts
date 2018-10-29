import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RouteConstants} from './utils/route-constants';
import {AppGuard} from './core/guards/app-guard';
import {AdminGuard} from './core/guards/admin-guard';
import {ClientGuard} from './core/guards/client-guard';
import {RegisterGuard} from './core/guards/register-guard';
import {LoginComponent, AuthComponent, S404Component} from './shared';

const appRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: RouteConstants.ADMIN,
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [AdminGuard],
      },
      {
        path: RouteConstants.CLIENT,
        loadChildren: 'app/client/client.module#ClientModule',
        canActivate: [ClientGuard],
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
