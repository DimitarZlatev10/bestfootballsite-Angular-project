import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  constructor() {}

  isLoggedIn() {
    console.log(`isUser`, localStorage.getItem('token') !== null);

    return localStorage.getItem('token') !== null;
  }
}
