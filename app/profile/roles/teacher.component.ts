import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'teacher.component.html'
})

export class TeacherComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        console.log('Teacher Component');
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
}
