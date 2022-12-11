import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  constructor() {}

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
