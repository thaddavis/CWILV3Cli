import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Question } from '../_models/index';


@Injectable()
export class QuestionService {

    questionServerUrl = 'http://localhost:3090';

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.questionServerUrl + '/questions', this.jwt()).map((response: Response) =>
          response.json()
        );
    }

    getById(id: string) {
        return this.http.get(this.questionServerUrl + '/questions/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(question: Question) {
        return this.http.post(this.questionServerUrl + '/questions', question, this.jwt()).map((response: Response) => response.json());
    }

    update(question: Question) {
        return this.http.put(this.questionServerUrl + '/questions/' + question.id, question, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.questionServerUrl + '/questions/' + id, this.jwt()).map((response: Response) => response.json());
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
