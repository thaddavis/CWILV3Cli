import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class StudentGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      let token = JSON.parse(localStorage.getItem('currentUser'))

      if (token) {
        this.authenticationService.authenticateRole(token)
          .subscribe(
            data => {
              if (data.role == "student") {
                //this.router.navigate(['/profile/student']);
                return true;
              } else if (data.role == "teacher") {
                return false;
              } else {
                return false;
              }
          },
          error => {
              return false;
          });
        return true;
      } else {
        this.router.navigate(['/login']);
        return false
      }

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let token = JSON.parse(localStorage.getItem('currentUser'))

      if (token) {
          this.authenticationService.authenticateRole(token)
            .subscribe(
              data => {
                if (data.role == "student") {
                  this.router.navigate(['/profile/student']);
                  return true;
                } else if (data.role == "teacher") {
                  this.router.navigate(['/profile/teacher']);
                  return true;
                } else {
                  return false;
                }
            },
            error => {
                return false;
            });

          return true;
        } else {
          return false
        }

      }


}
