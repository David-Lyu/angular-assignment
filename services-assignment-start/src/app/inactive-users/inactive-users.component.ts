import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserService) {}


  ngOnInit() {
    this.users = this.userService.inactiveUser;
  }

  onSetToActive(id: number) {
    this.userService.setActiveUser(id);
  }
}
