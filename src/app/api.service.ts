import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadUsers() {
    return this.httpClient.get(`${apiUrl}/users`);
  }

  loadShirts() {
    return this.httpClient.get(`${apiUrl}/shirts`);
  }

  loadShirtById(id: any) {
    return this.httpClient.get(`${apiUrl}/shirts/` + id);
  }
}
