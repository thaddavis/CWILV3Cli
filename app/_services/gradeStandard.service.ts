import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class GradeStandardService {

    ServerUrl = 'http://localhost:3090';

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.ServerUrl + '/gradeStandards', this.jwt()).map((response: Response) =>
          response.json()
        );
    }

    jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
