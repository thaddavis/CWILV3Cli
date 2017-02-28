import { Component, OnInit } from '@angular/core';

import { Question, User } from '../../_models/index';
import { UserService, AuthenticationService, QuestionService, GradeStandardService } from '../../_services/index';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'browse-questions.component.html',
    styleUrls: ['./browse-questions.css']
})

export class BrowseQuestionsComponent implements OnInit {
    questions: Question[] = [];
    filteredQuestions: Question[] = [];

    domainsAndStandards: any;
    domainKeys: any;

    constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private router: Router,
      private questionService: QuestionService,
      private gradeStandardService: GradeStandardService
    ) {

    }

    ngOnInit() {
        this.loadAllQuestions();
        this.loadAllDomainsAndStandards();
    }

    loadAllQuestions() {
        this.questionService.getAll().subscribe(questions => {
          this.questions = questions['questions'];
          this.filteredQuestions = this.questions;
        });
    }

    loadAllDomainsAndStandards() {
      this.gradeStandardService.getAll().subscribe(data => {
        this.domainKeys = Object.keys(data['gradeStandards'][0]['domains']);

        this.domainsAndStandards = data['gradeStandards'][0]['domains'];
      });
    }

    filterQuestions(standard: string) {

      if (standard.length == 0) {
        this.filteredQuestions = this.questions
        return;
      }

      var queryStandard = standard;

      this.filteredQuestions = this.questions.filter(q => q.standard === queryStandard)
    }

    loadQuestionDetail(question: any) {

        let navigationExtras: NavigationExtras = {
            queryParams: {
              "question_id": question._id
            }
        };

        this.router.navigate(['/teacher/question'], navigationExtras);

    }
}
