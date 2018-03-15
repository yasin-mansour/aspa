import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {
  constructor( private authService: AuthService, private router: Router) {
  }

  canActivate(_, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(resolve => {

      this.authService.getToken()
        .then(menuGroups => {
          console.log(this.router.config);
          resolve(true);

          // Retry the original navigation request
          // this.router.navigateByUrl(state.url, { replaceUrl: true });
        });
    });

  }
}
