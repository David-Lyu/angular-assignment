import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      //snap shot only loads when there are in a new component
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    //route observables:
    this.paramsSub = this.route.params.subscribe(
      (params: Params)=> {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
  }

  //if we add our own observables we need to do it, but for angular made ones
  //  this is optional
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
