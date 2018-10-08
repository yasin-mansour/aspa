import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {ResourceService} from '../services/resource.service';
import {Router} from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private resource: ResourceService) {
  }

  isLoaded = false;

  canActivate(_, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(resolve => {

      if (this.isLoaded) {
        // The routes have already been added. If we've hit this again, the route definitely doesn't exist.
        resolve(true);
        return;
      }

      const resource = this.resource.resource();
      const token = this.authService.getToken();

      Promise.all([resource, token])
        .then(menuGroups => {
          this.isLoaded = true;
          resolve(false);

          // Retry the original navigation request
          this.router.navigateByUrl(state.url);
        });
    });

  }
}
