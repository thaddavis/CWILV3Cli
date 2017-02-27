import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService, AuthenticationService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {

    constructor(private userService: UserService,
      private authenticationService: AuthenticationService,
      private route: ActivatedRoute,
      private router: Router ) {

    }

    ngOnInit() {

    }

}
