import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import {
  UserService,
  AuthenticationService,
  TestService,
  QuestionService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'grade-detail.component.html',
    styleUrls: ['./grade-detail.css']
})

export class GradeDetailComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    testID: any;
    result: any;
    testInfo: any;
    questionInfo: any = [];

    constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private testService: TestService,
      private questionService: QuestionService,
      private route: ActivatedRoute,
      private router: Router) {
        console.log('GradeDetailComponent');
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {

          console.log(params['testID']);
          console.log(params['result']);

          this.testID = params['testID'];
          this.result = params['result'].split(',');

          this.loadGradeDetailInfo();

      });
    }

    loadGradeDetailInfo() {

        this.testService.getTestsById(this.testID).subscribe(test => {

          console.log(test['test']);

          for (let i of test['test'].questions) {

            this.questionService.getById(i).subscribe(q => {

              console.log(q['question']);
              this.questionInfo.push(q['question']);
            });


          }


          // this.http.get(this.questionServerUrl + this.currentQuestion.questionFile).map((response: Response) =>
          //   response).subscribe(
          //                   data => {
          //                     this.currentTest = data;
          //
          //                     const fragment = document.createRange().createContextualFragment(this.currentTest._body);
          //                     this.elementRef.nativeElement.appendChild(fragment);
          //                   },
          //                   err => console.log(err),
          //                   () => console.log("Completed"));

        },
        err => console.log(err),
        () => console.log("Completed")
      );


    }

}
