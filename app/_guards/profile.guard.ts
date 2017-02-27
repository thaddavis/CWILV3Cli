import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class ProfileGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log('canActivate profile');
      let token = JSON.parse(localStorage.getItem('currentUser'))

      if (token) {
        this.authenticationService.authenticateRole(token)
          .subscribe(
            data => {
              if (data.role == "student") {
                console.log('s');
                this.router.navigate(['/student']);
                return true;
              } else if (data.role == "teacher") {
                console.log('t');
                this.router.navigate(['/teacher']);
                return true;
              } else {
                return false;
              }
          },
          error => {
              return false;
          });

          //return true;
      } else {
        this.router.navigate(['/login']);
        return false
      }

    }
}
