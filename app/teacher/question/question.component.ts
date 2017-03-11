import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { User, Question } from '../../_models/index';
import { UserService, AuthenticationService, QuestionService, ShoppingCartService } from '../../_services/index';
import { Router } from '@angular/router';
import { ActivatedRoute }     from '@angular/router';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    templateUrl: 'question.component.html',
    styleUrls: ['./question.css']
})

export class QuestionComponent implements OnInit {

    currentQuestionId: string;
    currentQuestion: Question;
    currentTest: any;
    @ViewChild('gameLogic') elementRef:ElementRef;
    questionServerUrl = 'http://localhost:3090/';

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private questionService: QuestionService,
      private shoppingCartService: ShoppingCartService,
      private http: Http
    ) {
        console.log('Question Component');
    }

    ngOnInit() {

      this.route.queryParams.subscribe(params => {

          this.currentQuestionId = params["question_id"];
          this.loadQuestion(this.currentQuestionId);

      });
    }

    ngAfterViewInit() {

    }

    loadQuestion(currentQuestionId: string) {

        this.questionService.getById(currentQuestionId).subscribe(question => {
          this.currentQuestion = question['question'];

          console.log(this.currentQuestion);

          console.log(this.questionServerUrl + this.currentQuestion.questionFile);

          this.http.get(this.questionServerUrl + this.currentQuestion.questionFile).map((response: Response) =>
            response).subscribe(
                            data => { 
                              this.currentTest = data; 

                              const fragment = document.createRange().createContextualFragment(this.currentTest._body);
                              this.elementRef.nativeElement.appendChild(fragment);    
                            },
                            err => console.log(err),
                            () => console.log("Completed"));
          
        });
    }

    addToTestsCart() {
      console.log("addToTestsCart");
      this.shoppingCartService.add(this.currentQuestion);
      console.log(this.shoppingCartService.get());
    }


}
