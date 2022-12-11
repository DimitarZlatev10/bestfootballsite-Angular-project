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

  loadShirtById(id: string | null) {
    return this.httpClient.get(`${apiUrl}/shirts/` + id);
  }

  loadShirtByTeamName(teamName: string | null) {
    return this.httpClient.get(`${apiUrl}/shirts/teamName/` + teamName);
  }

  getUserId(email: string) {
    return this.httpClient.post(`${apiUrl}/users/getId`, { email });
  }

  getUserInfo(email: string) {
    return this.httpClient.post(`${apiUrl}/users/userInfo`, { email });
  }

  loadUserWishlist(email: string) {
    return this.httpClient.post(`${apiUrl}/users/userWishlist`, { email });
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
