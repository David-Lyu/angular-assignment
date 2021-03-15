import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  // constructor() {
  //   this.forbiddenNames = this.forbiddenNames.bind(this);
  // }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    //any key stroke console.logs looks for changes in value
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value)
    // })
    // this.signupForm.statusChanges.subscribe((status) => {
    //   console.log(status)
    // })
    this.signupForm.setValue({
      'userData': {
        'username': "Max",
        'email': "max@test.com"
      },
      gender: 'male',
      'hobbies': []
    })
    this.signupForm.patchValue({
      'userData': {
        username: "Maximillius"
      }
    })
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // this uses the *ngFor="let hobbyControl of controls;"
  //instead of *ngFor="let hobbyControl of getControl()"  <--- above code
//   get controls() {
//   return (this.signupForm.get('hobbies') as FormArray).controls;
// }

  onSubmit() {
    console.log(this.signupForm)
    this.signupForm.reset();
  }

  //new Validators
  forbiddenNames(control: FormControl): {[s:string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((res,rej) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') res({'emailIsForbidden': true});
        else res(null);
      }, 1500);
    });
    return promise
  }
}
