import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root',
})
export class userGuard implements CanActivate {
  constructor(private auth: GuardService, private router: Router) {}

  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    alert(`You must login to access this action`);
    this.router.navigate(['/auth/login']);
    return false;
  }
}
