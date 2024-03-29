﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {

    authServerUrl = 'http://localhost:3090';

    constructor(private http: Http) { }

    //getAll() {
    //    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    //}

    getById(id: number) {
        return this.http.post(this.authServerUrl + '/users/' + id, {}, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.authServerUrl + '/signup', user, this.jwt()).map((response: Response) => response.json());
    }

    //update(user: User) {
    //    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    //}

    //delete(id: number) {
    //    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    //}

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
