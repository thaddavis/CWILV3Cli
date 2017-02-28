import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';
import { ActivatedRoute }     from '@angular/router';
import { Question } from '../';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    templateUrl: 'question.component.html',
    styleUrls: ['./question.css']
})

export class QuestionComponent implements OnInit {

    currentQuestion: Question;

    constructor(private router: Router, private route: ActivatedRoute) {
        console.log('Specific Question Component');
    }

    ngOnInit() {

      this.route.queryParams.subscribe(params => {
          console.log(params["firstname"]);
          console.log(params["lastname"]);
      });
    }

}
