import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'overview.component.html',
    styleUrls: ['./overview.css']
})

export class OverviewComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
        console.log('Teacher Overview Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        //this.loadAllUsers();
    }

    deleteUser(id: number) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        //this.userService.getAll().subscribe(users => { this.users = users; });
    }

    loadStudentDetail() {
        this.router.navigate(['/teacher/student-detail']);
    }
}
