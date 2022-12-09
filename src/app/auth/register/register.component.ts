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

  registerUser() {
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

          console.log(localStorage);
          console.log(data);
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
