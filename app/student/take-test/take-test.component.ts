import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';

import { User } from '../../_models/index';
import {
	UserService,
	AuthenticationService,
	ClassTestsForStudentsService,
	ClassStudentService,
	ClassOfTeacherService,
  TestService,
  QuestionService,
	TestResponseService
} from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';

@Component({
    moduleId: module.id,
    templateUrl: 'take-test.component.html',
    styleUrls: ['./take-test.css']
})
export class TakeTestComponent implements OnInit, OnDestroy {

    testInfo: any = {};
    currentQuestion: any;
		currentQuestionHTML: any;
    currentTest: any;
		currentTestQuestionCount: any;

		currentUserID = "";
		currentClassID = "";

		responsesArray:any[] = [];

    @ViewChild('currentQuestionCode') elementRef:ElementRef;
    questionServerUrl = 'http://localhost:3090/';

		questionCounter = 0;

    constructor(
    	private userService: UserService,
    	private authenticationService: AuthenticationService,
    	private router: Router,
      private route: ActivatedRoute,
    	private classTestsForStudentsService: ClassTestsForStudentsService,
    	private classStudentService: ClassStudentService,
    	private classOfTeacherService: ClassOfTeacherService,
      private testService: TestService,
      private questionService: QuestionService,
			private testResponseService: TestResponseService,
      private http: Http) {
    	console.log('Take Test Component');
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.testInfo = JSON.parse(params["testInfo"]);
						this.currentUserID = params["studentID"];
						this.currentClassID = params["classID"];
						this.currentTestQuestionCount = this.testInfo.questions.length
						this.loadQuestion();
        });
    }

    ngOnDestroy() {
        console.log('leaving destroy all instances event listeners');
        //this.elementRef.dispose();
    }

		nextQuestion() {

				console.log('eval responses Array');
				console.log(this.responsesArray);

				this.processResponse();


				if ( this.questionCounter < this.currentTestQuestionCount - 1) {
					this.questionCounter++;
				}

				this.loadQuestion();
		};

		previousQuestion() {

			console.log("previousQuest");
			console.log(this.currentTestQuestionCount);

				if ( this.questionCounter > 0 ) {
						this.questionCounter--;
				}

				this.loadQuestion();
		};

    loadQuestion() {

            this.questionService.getById(this.testInfo.questions[this.questionCounter]).subscribe(question => {
              this.currentQuestion = question['question'];
              console.log(this.currentQuestion);
              console.log(this.questionServerUrl + this.currentQuestion.questionFileGraded);
              this.http.get(this.questionServerUrl + this.currentQuestion.questionFileGraded).map((response: Response) =>
                response).subscribe(
                    data => {
                      this.currentTest = data;
                      const fragment = document.createRange().createContextualFragment(this.currentTest._body);
											this.elementRef.nativeElement.innerHTML = "";

											this.elementRef.nativeElement.appendChild(fragment);
                    },
                    err => console.log(err),
                    () => console.log("Completed"));
            });

    }

		processResponse() {
			this.responsesArray[this.questionCounter] = $('#responseJSON')[0].innerText === "" ? "Incorrect": $('#responseJSON')[0].innerText;
		}

    finishedTest() {
			this.processResponse();

			console.log('collection of answers');
			console.log(this.responsesArray);


			console.log("studentID:" + this.currentUserID);
			console.log("classID:" + this.currentClassID);

			this.testResponseService.create({
				studentTestResponse: this.responsesArray,
				testID: this.testInfo._id,
				studentID: this.currentUserID,
				classID: this.currentClassID
			}).subscribe(data => {
				console.log(data);
			},
			err => console.log(err),
			() => {
				console.log("Completed")

				this.router.navigate(['/student/reports']);
			});

			// result: String,
		  // testID: {
		  // 	type: mongoose.Schema.Types.ObjectId,
			// required: true,
			// default: '58c40ea4152cf9154cf14cd4'
		  // },
		  // studentID: {
		  // 	type: mongoose.Schema.Types.ObjectId,
			// required: true,
			// default: '58b37cafcb927d145f08fe5a'
		  // },
		  // created_at: { type : Date, default: Date.now }

    }
}
