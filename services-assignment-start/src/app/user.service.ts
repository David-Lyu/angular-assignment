import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {
  activeUser: string[] = ['Max','Anna'];
  inactiveUser: string[] = ['Chris', 'Manu'];

  setActiveUser(id:number) {
    const name:string = this.inactiveUser[id];
    this.activeUser.push(name);
    this.inactiveUser.splice(id,1);
  }

    setInactiveUser(id:number) {
    this.inactiveUser.push(this.activeUser[id])
    this.activeUser.splice(id,1);
  }
}
