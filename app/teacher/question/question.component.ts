import { Component, OnInit } from '@angular/core';

import { User, Question } from '../../_models/index';
import { UserService, AuthenticationService, QuestionService, ShoppingCartService } from '../../_services/index';
import { Router } from '@angular/router';
import { ActivatedRoute }     from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    templateUrl: 'question.component.html',
    styleUrls: ['./question.css']
})

export class QuestionComponent implements OnInit {

    currentQuestionId: string;
    currentQuestion: Question;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private questionService: QuestionService,
      private shoppingCartService: ShoppingCartService
    ) {
        console.log('Question Component');
    }

    ngOnInit() {

      this.route.queryParams.subscribe(params => {

          this.currentQuestionId = params["question_id"];
          this.loadQuestion(this.currentQuestionId);
      });
    }

    loadQuestion(currentQuestionId: string) {

        this.questionService.getById(currentQuestionId).subscribe(question => {
          this.currentQuestion = question['question'];

          console.log(this.currentQuestion);
        });
    }

    addToTestsCart() {
      this.shoppingCartService.add(this.currentQuestion);
      console.log(this.shoppingCartService.get());
    }


}
