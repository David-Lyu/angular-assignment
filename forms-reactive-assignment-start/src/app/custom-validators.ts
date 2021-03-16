import { FormControl } from "@angular/forms";
import { resolve } from "node:path";
import { Observable } from "rxjs";

export class CustomValidators {
  static invalidProjectName(control: FormControl): {[s:string]: boolean} {
    if(control.value === 'Test') return {'invalidProjectName': true}
    return null;
  }

  static asyncInvaliProjName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((res,rej) => {
      setTimeout(()=> {
        if( control.value === "TestProject") {
          res({'invalidProjectName': true});
        } else {
          res(null);
        }
      }, 1000)
    })
    return promise;
  }
}
