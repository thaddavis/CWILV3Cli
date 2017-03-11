import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClassStudent } from '../_models/index';

@Injectable()
export class ClassStudentService {

    classStudentServerUrl = 'http://localhost:3090';

    constructor(private http: Http) {}

    getAll(classID: string) {

        var classIDObj =  { classID };

        console.log(classIDObj);
        
        return this.http.post(this.classStudentServerUrl + '/students', classIDObj, this.jwt()).map((response: Response) =>
          response.json()
        );
    }

    create(studentID: string, classID: string) {
        
        var classObj = { studentID, classID };

        console.log("create");
        console.log(classObj);

        return this.http.post(this.classStudentServerUrl + '/newStudents', classObj, this.jwt()).map((response: Response) => response.json());
    }

    getStudentClasses(studentID: any) {

        console.log('getting student classes');
        console.log(studentID);

        var studentIDObj = { studentID };

        return this.http.post(this.classStudentServerUrl + '/studentClasses', studentIDObj, this.jwt()).map((response: Response) => response.json());

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
