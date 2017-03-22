import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class TestResponseService {

    testResponseServerUrl = 'http://localhost:3090';

    constructor(private http: Http) { }

    create(t: any) {

        return this.http.post(this.testResponseServerUrl + '/testResponse', t, this.jwt()).map((response: Response) => response.json());
    }

    getTestResponsesForStudentInClass(studentID: any, classID: any) {

      var t = {studentID, classID};

      return this.http.post(this.testResponseServerUrl + '/testResponsesForStudentInClass', t, this.jwt()).map((response: Response) => response.json());

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
