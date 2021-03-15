import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //access form not just submit but earlier, like validity
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    //this would hard set the values, so if prefilled itll overwrite
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: '',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  ngOnInit() {}
  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signupForm.value)
    this.submitted = true;
    this.user['username'] = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
