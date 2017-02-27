import { Component, OnInit } from '@angular/core';

import { Question, User } from '../../_models/index';
import { UserService, AuthenticationService, QuestionService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'browse-questions.component.html',
    styleUrls: ['./browse-questions.css']
})

export class BrowseQuestionsComponent implements OnInit {
    questions: Question[] = [];

    constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private router: Router,
      private questionService: QuestionService
    ) {
        console.log('Browse Component');
    }

    ngOnInit() {
        this.loadAllQuestions();
    }

    loadAllQuestions() {
        this.questionService.getAll().subscribe(questions => {
        console.log(questions['questions']);
        this.questions = questions['questions']; });
    }
}
