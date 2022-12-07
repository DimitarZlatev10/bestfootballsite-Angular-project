import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get isLoggedIn() {
    // return this.authService.isLoggedIn;
    console.log(localStorage.getItem('id'));
    return localStorage.getItem('id') !== null;
  }

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  logout() {
    this.httpClient.post('http://localhost:3000/users/logout', {}).subscribe({
      next: (value) => {
        localStorage.clear();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {}
}
