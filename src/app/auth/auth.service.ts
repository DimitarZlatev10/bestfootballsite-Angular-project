import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get isLoggedIn() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') !== null;
  }
  constructor() {}
}
