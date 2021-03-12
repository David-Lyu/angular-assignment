import { resolve } from "node:path";

export class AuthService {
  loggedIn = false;

  isAuth() {
    const promise = new Promise((res,rej) => {
      setTimeout(() => {
        res(this.loggedIn);
      }, 800);
    })
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
