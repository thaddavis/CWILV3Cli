import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClassOfTeacher } from '../_models/index';

@Injectable()
export class ClassOfTeacherService {

    classServerUrl = 'http://localhost:3090';

    constructor(private http: Http) {}

    get() {
        return this.http.get(this.classServerUrl + '/classes', this.jwt()).map((response: Response) =>
          response.json()
        );
    }

    getById(id: string) {
        return this.http.get(this.classServerUrl + '/classes/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(classOfTeacher: ClassOfTeacher) {
        return this.http.post(this.classServerUrl + '/classes', classOfTeacher, this.jwt()).map((response: Response) => response.json());
    }

    update(classOfTeacher: ClassOfTeacher) {
        return this.http.put(this.classServerUrl + '/classes/' + classOfTeacher.id, classOfTeacher, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.classServerUrl + '/classes/' + id, this.jwt()).map((response: Response) => response.json());
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
