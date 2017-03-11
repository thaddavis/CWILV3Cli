import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';

import { User } from '../../_models/index';
import { 
	UserService,
	AuthenticationService,
	ClassTestsForStudentsService,
	ClassStudentService,
	ClassOfTeacherService,
    TestService,
    QuestionService
} from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    templateUrl: 'take-test.component.html',
    styleUrls: ['./take-test.css']
})

export class TakeTestComponent implements OnInit, OnDestroy {

    testInfo: any = {};
    @ViewChild('currentQuestionCode') elementRef:ElementRef;
    questionServerUrl = 'http://localhost:3090/';

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
        private http: Http) {
    	
    	console.log('Take Test Component');

    }

    ngOnInit() {

        this.route.queryParams.subscribe(params => {

            this.testInfo = JSON.parse(params["testInfo"]);
            this.beginTest();

        });

    }

    ngOnDestroy() {
        console.log('leaving destroy all instances event listeners');
        //this.elementRef.dispose();
    }

    beginTest() {

        console.log('beginning Test');

        console.log(this.testInfo);

        for (let i of this.testInfo.questions) {

            this.questionService.getById(i).subscribe(question => {
              this.currentQuestion = question['question'];

              console.log(this.currentQuestion);

              console.log(this.questionServerUrl + this.currentQuestion.questionFileGraded);

              this.http.get(this.questionServerUrl + this.currentQuestion.questionFileGraded).map((response: Response) =>
                response).subscribe(
                    data => {
                      this.currentTest = data;

                        console.log('ComeOn');
                        console.log(this.elementRef.nativeElement.children);

                        //this.elementRef.nativeElement.children.remove();
                        console.log(this.elementRef.nativeElement.children);                        

                        console.log('Negro');
                        console.log(this.elementRef.nativeElement.children);                        

                        //this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.firstChild);

                        console.log('Negro 2');
                        

                      //this.elementRef.nativeElement.replaceChild('', this.elementRef.nativeElement.firstChild);    
                      const fragment = document.createRange().createContextualFragment(this.currentTest._body);
                      this.elementRef.nativeElement.appendChild(fragment);    
                      //this.elementRef.nativeElement.replaceChild(fragment, this.elementRef);    
                    },
                    err => console.log(err),
                    () => console.log("Completed"));         
            });
        }
    }
}
