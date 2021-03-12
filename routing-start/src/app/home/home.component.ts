import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number){
    //complex calc... etc
    //uses an absolute path can use rel path too
    if(id === undefined || id < 0) {
      this.router.navigate(['/servers'])
      return;
    }
    this.router.navigate(['/servers', id,'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'})
  }

  onLogin() {
    this.authService.login();
  }

  onLogOut() {
    this.authService.logout();
  }
}
