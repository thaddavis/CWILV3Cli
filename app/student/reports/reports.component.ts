import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import {
  UserService,
  AuthenticationService,
  ClassStudentService,
  ClassOfTeacherService,
  TestService,
  TestResponseService
} from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'reports.component.html',
    styleUrls: ['./reports.css']
})

export class ReportsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    currentUserID = '';

    studentClasses:any[] = [];
    testsOfSelectedClass:any[] =  [];
    testsResponsesOfSelectedClass:any[] = [];
    testsOfTestResponses:any[] = [];

    constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private router: Router,
      private classStudentService: ClassStudentService,
      private classOfTeacherService: ClassOfTeacherService,
      private testService: TestService,
      private testResponseService: TestResponseService) {
        console.log('Reports Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadMyClasses();
    }

    logout() {

      this.authenticationService.logout();
      this.router.navigate(['/']);

    }

    deleteUser(id: number) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    loadMyClasses() {

    	this.authenticationService.authenticated(JSON.parse(localStorage.getItem('currentUser'))).subscribe(
            data => {

            	this.currentUserID = data.userID;
            	this.classStudentService.getStudentClasses(this.currentUserID).subscribe(
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

    loadGrades(classID: any) {
        this.testsResponsesOfSelectedClass = [];
    	  this.testResponseService.getTestResponsesForStudentInClass(this.currentUserID, classID).subscribe(
            data => {
              this.testsResponsesOfSelectedClass = data["studentResponses"];
              var count = 0;
              for (let i of this.testsResponsesOfSelectedClass) {
                this.testService.getTestsById(i['testID']).subscribe(
                    data => {
                        this.testsResponsesOfSelectedClass[count].testName = data['test']['name'];
                        count++;
                    }
                )
              }
            }
        );
    }
}
