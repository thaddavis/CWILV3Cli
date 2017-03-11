import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Test } from '../_models/index';

@Injectable()
export class ClassTestService {

    classTestServerUrl = 'http://localhost:3090';

    constructor(private http: Http) { }

    getClassTests() {
        
        console.log('getClassTests');

        //return this.http.get(this.classTestServerUrl + '/getClassTests', this.jwt()).map((response: Response) =>
        //  response.json();
        //);   
    }

    create(ct: any) {
        
        console.log('create ClassTest');
        console.log(ct);

        return this.http.post(this.classTestServerUrl + '/newClassTest', ct, this.jwt()).map((response: Response) => response.json());
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