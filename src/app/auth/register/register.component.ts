import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  repass: string = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localService: LocalService
  ) {}

  isUserNameValid() {
    return /.{3,}/.test(this.username);
  }

  isEmailValid() {
    return /^[a-zA-Z0-9]+\@[a-zA-Z]{2,}\.[a-zA-Z0-9]{2,}$/.test(this.email);
  }
  isPasswordValid() {
    return this.password.length < 6;
  }
  isRepassValid() {
    return this.password == this.repass;
  }

  registerUser() {
    if (!this.isUserNameValid()) {
      this.errorMessage = 'Username is invalid';
      return;
    }

    if (!this.isEmailValid()) {
      this.errorMessage = 'Email is invalid';
      return;
    }

    if (this.isPasswordValid()) {
      this.errorMessage = 'Password is invalid';
      return;
    }

    if (!this.isRepassValid()) {
      this.errorMessage = "Passwords don't match";
      return;
    }

    this.errorMessage = '';

    this.httpClient
      .post(`http://localhost:3000/users/register`, {
        username: this.username,
        email: this.email,
        password: this.password,
        repass: this.repass,
      })
      .subscribe({
        next: (data) => {
          this.localService.saveData('token', this.email);
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          console.error(err);
        },
      });
  }

  ngOnInit(): void {}
}
