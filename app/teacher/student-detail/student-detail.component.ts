import { Component, OnInit } from '@angular/core';

import { User, Question } from '../../_models/index';
import { UserService, AuthenticationService, QuestionService, ShoppingCartService } from '../../_services/index';
import { Router } from '@angular/router';
import { ActivatedRoute }     from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    templateUrl: 'student-detail.component.html',
    styleUrls: ['./student-detail.css']
})

export class StudentDetailComponent implements OnInit {

    options: Object;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private questionService: QuestionService,
      private shoppingCartService: ShoppingCartService,
      private http: Http
    ) {
        console.log('Student Detail Component');
        http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe( (res:any) => {
            this.options = {
                title : { text : 'AAPL Stock Price' },
                series : [{
                    name : 'AAPL',
                    data : res.json(),
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
        });
    }

    ngOnInit() {

    }

}
