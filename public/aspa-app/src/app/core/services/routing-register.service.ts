import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {PageComponent} from '../../shared/components/page/page.component';
import {Router} from '@angular/router';
import {AuthGuard} from '../guards/auth-guard';

@Injectable()
export class RoutingRegisterService {

  component = {
    page: PageComponent
  }

  routerConfig = [/*{
    name: 'page',
    urlName: 'admin',
    role: 'admin'
  }*/];

  constructor(private router: Router) {

  }

  updateRouter() {
    const config = this.router.config;
    config[0].children = [...this.setRouteObject(this.routerConfig), ...config[0].children];
    this.router.resetConfig(config);
  }


  setRouteObject(description) {

    let route = [];
    if (description.length > 0) {

      route = description.map(object => {
        const mainRouter = {
          path: object.urlName,
          component: this.component[object.name],
          data: { userRole: object.role},
          canActivate: [AuthGuard]
        };

        if (object.children) {
          mainRouter['children'] = object.children.map(object2 => {
              return this.setRouteObject(object2);
            }
          );
          const emptyPath = {
            path: '',
            redirectTo: description.children[0].baseRoute,
            data: description.children[0],
            pathMatch: 'full'
          };

          mainRouter['children'].push(emptyPath);
        }

        return mainRouter;
      });

    }
    return route;
  }

}

