import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Test } from '../_models/index';

@Injectable()
export class TestService {

    testServerUrl = 'http://localhost:3090';

    constructor(private http: Http) { }

    getTests() {
        return this.http.get(this.testServerUrl + '/tests', this.jwt()).map((response: Response) =>
          response.json()
        );   
    }

    getTestsById(testID: string) {

        return this.http.get(this.testServerUrl + '/tests/' + testID, this.jwt()).map((response: Response) =>
          response.json()
        );   
    }

    getTestsForClass(classID: any) {

        console.log('getTestsForClass');

        return this.http.get(this.testServerUrl + '/testsForClass/' + classID, this.jwt()).map((response: Response) =>
          response.json()
        );   
    
    }



    create(t: any) {
        
        var questions:any[] = [];

        t.forEach((item:any, index:any) => {
            questions.push(item._id);
        });

        var tObj = { name: 'Augustin Test', questions };

        return this.http.post(this.testServerUrl + '/tests', tObj, this.jwt()).map((response: Response) => response.json());
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
