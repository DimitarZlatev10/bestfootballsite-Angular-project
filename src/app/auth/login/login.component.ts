import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  loginUser() {
    this.httpClient
      .post(`http://localhost:3000/users/login`, {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          this.authService.user = {
            username: this.email,
          } as any;

          console.log(data);
          console.log(this.authService.user);

          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = err;
          console.error(err);
        },
      });
  }

  ngOnInit(): void {}
}
