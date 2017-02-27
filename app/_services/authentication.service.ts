import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    authServerUrl = 'http://localhost:3090';

    constructor(private http: Http) { }

    login(username: string, password: string) {

        return this.http.post(this.authServerUrl + '/signin', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    authenticated(token: string) {
      return this.http.get(this.authServerUrl + '/', this.jwt()).map((response: Response) => response.json() );
    }

    authenticateRole(token: string) {
      return this.http.get(this.authServerUrl + '/role', this.jwt()).map((response: Response) => response.json() );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {

            let headers = new Headers({ 'Authorization': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
