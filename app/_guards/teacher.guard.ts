import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeacherGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      let token = JSON.parse(localStorage.getItem('currentUser'))

      if (token) {
        return this.authenticationService.authenticateRole(token)
          .map(
            data => {
              if (data.role == "student") {
                return false;
              } else if (data.role == "teacher") {
                return true;
              } else {
                return false;
              }
          });

      } else {
        this.router.navigate(['/login']);
        return Observable.of(false);
      }

    }

}
