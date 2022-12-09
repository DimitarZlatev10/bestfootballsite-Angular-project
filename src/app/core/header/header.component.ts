import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  constructor(private httpClient: HttpClient, private router: Router) {}

  logout() {
    this.httpClient.post('http://localhost:3000/users/logout', {}).subscribe({
      next: (value) => {
        localStorage.clear();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {}
}
