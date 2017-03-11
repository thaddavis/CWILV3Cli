import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    templateUrl: 'overview.component.html',
    styleUrls: ['./overview.css']
})

export class OverviewComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    userID: String = '';

    constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
        console.log('Overview Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    ngOnInit() {
        //this.loadAllUsers();

        this.authenticationService.authenticated('').subscribe((data) => {
            console.log('auth service to get student id');
            this.userID = data.userID;
        });
    }

    logout() {

      this.authenticationService.logout();
      this.router.navigate(['/']);

    }

    deleteUser(id: number) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        //this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
