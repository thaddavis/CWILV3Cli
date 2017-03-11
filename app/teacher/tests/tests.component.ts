import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { User, Test, ClassOfTeacher } from '../../_models/index';
import { 
  UserService, 
  AuthenticationService, 
  ShoppingCartService, 
  TestService, 
  ClassOfTeacherService,
  ClassTestService
} from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'tests.component.html',
    styleUrls: ['./tests.css']
})

export class TestsComponent implements OnInit {

    shoppingCart: any[] = [];
    tests: Test[] = [];
    classes: ClassOfTeacher[] = [];
    assignTestToClassModel: any = { };
    @ViewChild('modalCode') elementRef:ElementRef;
    @ViewChild('hiddentestID') testidRef:ElementRef;
    

    constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private router: Router,
      private shoppingCartService: ShoppingCartService,
      private testService: TestService,
      private classOfTeacherService: ClassOfTeacherService,
      private classTestService: ClassTestService
    ) {
        console.log('Test Component');
    }

    ngOnInit() {
      this.loadTestsCart();
      this.loadAllTests();
      this.loadAllClasses();

      const fragment = document.createRange().createContextualFragment(this.script);
      this.elementRef.nativeElement.appendChild(fragment);
    }

    buildTest() {
      
      if (this.shoppingCartService.get().length == 0) {
        return;
      }      

      this.testService.create(this.shoppingCartService.get()).subscribe(test => {
          
          this.shoppingCartService.clear();
          this.loadTestsCart();
          this.loadAllTests();          

      });
    }

    private loadTestsCart() {
        this.shoppingCart = this.shoppingCartService.get();
    }

    private loadAllTests() {
      this.testService.getTests().subscribe(tests => {
          console.log(tests);
          this.tests = tests['tests'];
        });
    }

    private loadAllClasses() {
      this.classOfTeacherService.get().subscribe(classes => {
            this.classes = classes["classesOfTeacher"];
            console.log(this.classes);
      });
    }

    private assignTest() {
      
      this.assignTestToClassModel.testid = this.testidRef.nativeElement.value; 
      this.classTestService.create(this.assignTestToClassModel).subscribe(classTest => {
        console.log(classTest);
      });

    }

    script = `<script>$('#exampleModal').on('show.bs.modal', function (event) {

      var button = $(event.relatedTarget); 
      var testid = button.data('testid');
      var testname = button.data('name'); 

      var modal = $(this);
      modal.find('#myAssignTestName').text("Assign " + testname);
      modal.find('#hiddentestID').val(testid);

    });

      $('#submitButtonAssignTest').click(function(e) {
            $('#exampleModal').modal('toggle');
      });

    </script>`
}
