import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string | any = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localService: LocalService
  ) {}

  isEmailValid() {
    return /^[a-zA-Z0-9]+\@[a-zA-Z]{2,}\.[a-zA-Z0-9]{2,}$/.test(this.email);
  }

  loginUser() {
    this.httpClient
      .post(`http://localhost:3000/users/login`, {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          this.localService.saveData('token', this.email);

          console.log(localStorage['token'])
          console.log(`descrypted`,this.localService.getData('token'));
          console.log(data);
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          console.log(this.errorMessage);

          console.error(err);
        },
      });
  }

  ngOnInit(): void {}
}
