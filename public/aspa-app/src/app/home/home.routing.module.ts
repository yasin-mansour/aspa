import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
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
