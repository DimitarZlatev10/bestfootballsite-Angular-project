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
  phoneNumber: string = '';
  password: string = '';
  repass: string = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localService: LocalService
  ) {}


  isNumberValid(){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(this.phoneNumber)
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
    this.httpClient
      .post(`http://localhost:3000/users/register`, {
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
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
