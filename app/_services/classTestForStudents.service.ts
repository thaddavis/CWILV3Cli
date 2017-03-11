import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Test } from '../_models/index';

@Injectable()
export class ClassTestsForStudentsService {

    classTestsForStudentsServerUrl = 'http://localhost:3090';

    constructor(private http: Http) {}

    getTestsForClass(classID: any) {

        console.log('getTestsForClass');        

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