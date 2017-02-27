import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class TeacherGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      let token = JSON.parse(localStorage.getItem('currentUser'))

      if (token) {
        this.authenticationService.authenticateRole(token)
          .subscribe(
            data => {
              if (data.role == "student") {
                return false;
              } else if (data.role == "teacher") {
                //this.router.navigate(['/teacher']);
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
        this.router.navigate(['/login']);
        return false
      }

    }

}
