import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { User, ClassOfTeacher, ClassStudent } from '../../_models/index';
import { UserService, AuthenticationService, ClassOfTeacherService, ClassStudentService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'overview.component.html',
    styleUrls: ['./overview.css']
})

export class OverviewComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    addClassModel: any = { grade: 'K' };
    addStudentsModel: any = {};
    classes: ClassOfTeacher[] = [];
    studentsOfSelectedClass: any[] = [];
    selectedClassId: string = '';

    @ViewChild('modalCode') elementRef:ElementRef;
    @ViewChild('classCode') classCodeRef:ElementRef;

    constructor(
        private userService: UserService, 
        private authenticationService: AuthenticationService,
        private classOfTeacherService: ClassOfTeacherService,
        private classStudentService: ClassStudentService,
        private router: Router) {

        console.log('Teacher Overview Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    ngOnInit() {

        const fragment = document.createRange().createContextualFragment(this.script);
        this.elementRef.nativeElement.appendChild(fragment);

        this.loadClasses();

    }

    createClass() {
        console.log('createClass');
        this.classOfTeacherService.create(this.addClassModel).subscribe(classes => {
            this.classes.push(classes);    
        });        
    }

    addStudentToClass() {

        this.classStudentService.create(this.addStudentsModel.studentID, this.addStudentsModel.classID).subscribe(students => {
            this.loadStudents(this.selectedClassId);
        }); 

    }

    loadClasses() {
        this.classOfTeacherService.get().subscribe(classes => {
            this.classes = classes["classesOfTeacher"];
        });
    }

    loadStudentDetail() {
        this.router.navigate(['/teacher/student-detail']);
    }

    loadStudents(classID: any) {

        this.studentsOfSelectedClass = [];
        this.selectedClassId = classID;
        console.log(this.selectedClassId);
        const fragment = document.createRange().createContextualFragment(`<div style="display:none" id="classIDdiv">${this.selectedClassId}</div>`);
        this.classCodeRef.nativeElement.appendChild(fragment);
        
        this.classStudentService.getAll(this.selectedClassId).subscribe(students => {
            students["classStudents"].forEach((i:any) => {                
                var studentID = i.studentID;
                this.userService.getById(studentID).subscribe(student => {        
                    this.studentsOfSelectedClass.push( Object.assign({}, { 
                        name: `${student["user"].firstName} ${student["user"].lastName}`,
                        id: `${student["user"]._id}`
                    }) );
                },
                err => console.log(err),
                () => console.log("Completed"));

            });
            
            
        },
        err => console.log(err),
        () => console.log("Completed"));  
    }



    script = `<script>$('#myAddClassModal').on('shown.bs.modal', function () {
            $('#myInputAddClass').focus()
        });

        $('#submitButtonAddClass').click(function(e) {
            $('#myAddClassModal').modal('toggle');
        });

        $('#submitButtonAddStudent').click(function(e) {
            $('#myAddStudentsModal').modal('toggle');
        });
    </script>

    <script>
        $('#myAddStudentsModal').on('show.bs.modal', function (event) {          
          var IDVal = $('#classIDdiv').text();

          var modal = $(this);
          modal.find('#myAddStudentsModalClassID').text("Current ClassID: " + IDVal);
        });
    </script>

    `
}
