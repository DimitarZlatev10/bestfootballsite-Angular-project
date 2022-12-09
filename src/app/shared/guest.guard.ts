import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root',
})
export class guestGuard implements CanActivate {
  constructor(private auth: GuardService, private router: Router) {}

  canActivate() {
    if (this.auth.isLoggedIn()) {
      alert('You need to logout to access this action');
      console.log(`redirect to home`);
      this.router.navigate(['/']);

      return false;
    }
    return true;
  }
}
