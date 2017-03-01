import { Component, ViewChild, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'tests.component.html',
    styleUrls: ['./tests.css']
})

export class TestsComponent implements OnInit {

    

    constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
      console.log('Tests Component');

    }

}
