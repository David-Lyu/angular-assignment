import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //put it in app modules so we don't need this anymore
  // providers: [AccountService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accService.accounts;
  }
}
