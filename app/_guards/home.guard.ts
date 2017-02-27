import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class HomeGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let token = JSON.parse(localStorage.getItem('currentUser'))
        if (token) {

          var response = this.authenticationService.authenticated(token)
            .subscribe(
              data => {
                  this.router.navigate(['/profile']);
                  return true;
              },
              error => {
                  return true;
              });
        } else {
          return true;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }
}
