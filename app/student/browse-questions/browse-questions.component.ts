import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'browse-questions.component.html',
    styleUrls: ['./browse-questions.css']
})

export class BrowseQuestionsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
        console.log('Browse Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        //this.loadAllUsers();
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
