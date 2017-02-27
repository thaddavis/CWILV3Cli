import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class StudentGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Boolean> {
      console.log('Student Guard');
      let token = JSON.parse(localStorage.getItem('currentUser'))

      if (token) {
        return this.authenticationService.authenticateRole(token)
          .map(
            data => {
              if (data.role == "student") {
                console.log(' SGUARD student');
                return true;
              } else if (data.role == "teacher") {
                console.log(' SGUARD teacher');
                return false;
              } else {
                return false;
              }
          },
          error => {
              return false;
          }).first();

      } else {
        this.router.navigate(['/login']);
        return false
      }


      /*
      if (token) {
        this.authenticationService.authenticateRole(token)
          .map(
            data => {
              if (data.role == "student") {
                console.log(' SGUARD student');
                return true;
              } else if (data.role == "teacher") {
                console.log(' SGUARD teacher');
                return false;
              } else {
                return false;
              }
          },
          error => {
              return false;
          }).first();


      } else {
        this.router.navigate(['/login']);
        return false
      }
      */

    }


}
