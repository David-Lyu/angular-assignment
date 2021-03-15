import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptionType = ["Basic", "Advanced", "Pro"];
  @ViewChild('f') formElement;

  onSubmit() {
    console.log(this.formElement.value)
  }
}
