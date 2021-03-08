import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-assignment';
  data = 0;
  isEven = true;

  changeData(data) {
    this.data = data;
    this.isEven = data % 2 === 0;
  }
}
