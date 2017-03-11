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
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'tests.component.html',
    styleUrls: ['./tests.css']
})

export class TestsComponent {

	studentClasses = [];
    testsOfSelectedClass = [];

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

    	var studentID = '';

    	this.authenticationService.authenticated(JSON.parse(localStorage.getItem('currentUser'))).subscribe(
            data => {   

            	studentID = data.userID;
            	this.classStudentService.getStudentClasses(studentID).subscribe(
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
									console.log("YAARRR");
									this.studentClasses.push(data["classOfTeacher"]);
                                    console.log(this.studentClasses);
								}
							)

						}

		        });

        });

    }

    loadTests(classID: any) {

        this.testsOfSelectedClass = [];

    	this.testService.getTestsForClass(classID).subscribe(
            data => {
                console.log("RRREEDDD");
                console.log(data);

                for (let i of data["tests"]) {
                    this.testsOfSelectedClass.push(i);   
                }
            }
        );

    }



}
