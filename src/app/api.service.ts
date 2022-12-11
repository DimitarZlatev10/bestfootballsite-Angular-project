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

  getUserId(email: string) {
    return this.httpClient.post(`${apiUrl}/users/getId`, { email });
  }

  loadShirts() {
    return this.httpClient.get(`${apiUrl}/shirts`);
  }

  loadShirtById(id: any) {
    return this.httpClient.get(`${apiUrl}/shirts/` + id);
  }

  loadShirtByTeamName(teamName: string | null) {
    return this.httpClient.get(`${apiUrl}/shirts/teamName/` + teamName);
  }

  addToWishlist(shirtId: string, userId: string) {
    return this.httpClient.post(`${apiUrl}/shirts/wishlist`, {
      shirtId,
      userId,
    });
  }

  removeFromWishlist(shirtId: string, userId: string) {
    return this.httpClient.post(`${apiUrl}/shirts/removeWishlist`, {
      shirtId,
      userId,
    });
  }
}
