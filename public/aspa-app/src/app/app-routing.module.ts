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
      { path: '**', component: S404Component }
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
