import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService, AuthenticationService, ShoppingCartService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'tests.component.html',
    styleUrls: ['./tests.css']
})

export class TestsComponent implements OnInit {

    shoppingCart: any[] = [];

    constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private router: Router,
      private shoppingCartService: ShoppingCartService
    ) {
        console.log('Test Component');

    }

    ngOnInit() {
        this.loadTestsCart()
    }


    private loadTestsCart() {
        this.shoppingCart = this.shoppingCartService.get();
    }
}
