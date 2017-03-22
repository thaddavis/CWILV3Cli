import { Component, ViewChild, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import {
	UserService,
	AuthenticationService,
	ClassTestsForStudentsService,
	ClassStudentService,
	ClassOfTeacherService,
    TestService
} from '../../_services/index';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'tests.component.html',
    styleUrls: ['./tests.css']
})

export class TestsComponent {

		studentClasses:any[] = [];
    testsOfSelectedClass:any[] =  [];
		studentID = '';
		classID = '';

    constructor(
    	private userService: UserService,
    	private authenticationService: AuthenticationService,
    	private router: Router,
    	private classTestsForStudentsService: ClassTestsForStudentsService,
    	private classStudentService: ClassStudentService,
    	private classOfTeacherService: ClassOfTeacherService,
        private testService: TestService) {

    	console.log('Tests Component');

    	this.loadMyClasses();

    }

    loadMyClasses() {



    	this.authenticationService.authenticated(JSON.parse(localStorage.getItem('currentUser'))).subscribe(
            data => {

            	this.studentID = data.userID;
            	this.classStudentService.getStudentClasses(this.studentID).subscribe(
		            data => {

		             	var classIDs = []
		            	for (let i of data["studentClasses"]) {

		            		if (classIDs.indexOf(i.classID) == -1) {
    							classIDs.push(i.classID);
							}

						}

		          		for (let i of classIDs) {

							this.classOfTeacherService.getById(i).subscribe(
								data => {
									this.studentClasses.push(data["classOfTeacher"]);
								}
							)

						}

		        });

        });

    }

    loadTests(classID: any) {

        this.testsOfSelectedClass = [];

				this.classID = classID;
    		this.testService.getTestsForClass(classID).subscribe(
            data => {

                var testIDs = [];

                for (let i of data["tests"]) {

                    if( testIDs.indexOf(i.testID) == -1 ) {
                        testIDs.push(i.testID);
                    }
                }

                for (let i of testIDs) {

                    this.testService.getTestsById(i).subscribe(
                        data => {
                            this.testsOfSelectedClass.push(data["test"]);
                            console.log(this.testsOfSelectedClass);
                        }
                    )

                }

            }
        );

    }

    takeTest(t: any) {

        let navigationExtras: NavigationExtras = {
            queryParams: {
              "testInfo": JSON.stringify(t),
							"studentID": this.studentID,
							"classID": this.classID
            }
        };

        this.router.navigate(['/student/take-test'], navigationExtras);
    }


}
