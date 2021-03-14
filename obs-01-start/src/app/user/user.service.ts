import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
  //emitters are used with @Output
  // activatedEmitter = new EventEmitter<boolean>();
  //use subjects to communicate across services using an even emitter
  activatedEmitter = new Subject<boolean>();

}
