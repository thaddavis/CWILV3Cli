import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class ProfileGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return true;
    }
}



/*let token = JSON.parse(localStorage.getItem('currentUser'))
if (token) {
  console.log('token');
  this.authenticationService.authenticateRole(token)
    .subscribe(
      data => {
          console.log('authenticate Role');
          if (data.role == "student") {
            console.log('student Role');
            this.router.navigate(['/profile/student']);
            return true;
          } else if (data.role == "teacher") {
            console.log('teacher Role');
            this.router.navigate(['/profile/teacher']);
            return true;
          } else {
            console.log('false');
            return false;
          }
      },
      error => {
          console.log('false');
          return false;
      });
} else {
  console.log('false');
  return false;
}*/
