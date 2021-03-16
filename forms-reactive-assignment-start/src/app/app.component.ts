import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required,CustomValidators.invalidProjectName], CustomValidators.asyncInvaliProjName),
      email: new FormControl(null,[Validators.required,Validators.email]),
      status: new FormControl(this.statuses[1])
    })
  }

  //   getControls() {
  //   return (<FormArray>this.projectForm.get('hobbies')).controls;
  // }

  onSaveProject() {
    console.log(this.projectForm)
  }
}
